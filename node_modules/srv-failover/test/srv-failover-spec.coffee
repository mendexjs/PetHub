{beforeEach, describe, it} = global
{expect} = require 'chai'
_        = require 'lodash'
sinon    = require 'sinon'

SrvFailover = require '../src/'

describe 'SrvFailover', ->
  describe '->constructor', ->
    beforeEach ->
      @options = {
        domain: 'bar'
        service: 'foo'
        protocol: 'https'
      }

    describe 'when constructed with all required params', ->
      it 'should not throw', ->
        expect(=> new SrvFailover @options).not.to.throw()

    describe 'when constructed without a domain', ->
      it 'should error', ->
        options = _.omit @options, 'domain'
        expect(=> new SrvFailover options).to.throw 'Missing required parameter: domain'

    describe 'when constructed without a protocol', ->
      it 'should error', ->
        options = _.omit @options, 'protocol'
        expect(=> new SrvFailover options).to.throw 'Missing required parameter: protocol'

    describe 'when constructed without a service', ->
      it 'should error', ->
        options = _.omit @options, 'service'
        expect(=> new SrvFailover options).to.throw 'Missing required parameter: service'

  describe '->resolveUrl', ->
    describe 'when constructed with a fake dns', ->
      beforeEach ->
        @dns = {}
        @sut = new SrvFailover { domain: 'bar', service: 'foo', protocol: 'https' }, {@dns}

      describe 'when dns yields an error', ->
        beforeEach (done) ->
          @dns.resolveSrv = sinon.stub().withArgs('_foo._https.bar').yields new Error('Lookup error')
          @sut.resolveUrl (@error) => done()

        it 'should yield the error', ->
          expect(=> throw @error).to.throw 'Lookup error'

      describe 'when dns yields only one result', ->
        beforeEach (done) ->
          @dns.resolveSrv = sinon.stub().withArgs('_foo._https.bar').yields null, [
            {priority: 10, weight: 5, port: 443, name: 'here.foo.bar'}
          ]
          @sut.resolveUrl (error, @url) => done error

        it 'should return the first result', ->
          expect(@url).to.deep.equal 'https://here.foo.bar:443'

      describe 'when dns yields two results', ->
        beforeEach (done) ->
          @dns.resolveSrv = sinon.stub().withArgs('_foo._https.bar').yields null, [
            {priority: 99, weight: 5, port: 443, name: 'here.foo.bar'}
            {priority: 1,  weight: 5, port: 443, name: 'there.foo.bar'}
          ]
          @sut.resolveUrl (error, @url) => done error

        it 'should return the result with the higher priority (lower numeric value)', ->
          expect(@url).to.deep.equal 'https://there.foo.bar:443'

    describe 'when constructed with urlProtocol', ->
      beforeEach ->
        @dns = {}
        @sut = new SrvFailover { domain: 'bar', service: 'foo', protocol: 'https', urlProtocol: 'wss' }, {@dns}

      describe 'when dns yields only one result', ->
        beforeEach (done) ->
          @dns.resolveSrv = sinon.stub().withArgs('_foo._https.bar').yields null, [
            {priority: 10, weight: 5, port: 443, name: 'here.foo.bar'}
          ]
          @sut.resolveUrl (error, @url) => done error

        it 'should return the first result, using the urlProtocol', ->
          expect(@url).to.deep.equal 'wss://here.foo.bar:443'

  describe '->markBadUrl', ->
    describe 'when constructed with a fake dns', ->
      beforeEach ->
        @dns = {}
        @sut = new SrvFailover { domain: 'bar', service: 'foo', protocol: 'https' }, {@dns}

      describe 'with no ttl given', ->
        describe 'when dns yields only one result', ->
          beforeEach (done) ->
            @sut.markBadUrl('https://here.foo.bar:443')

            @dns.resolveSrv = sinon.stub().withArgs('_foo._https.bar').yields null, [
              {priority: 10, weight: 5, port: 443, name: 'here.foo.bar'}
            ]

            @sut.resolveUrl (@error) => done()

          it 'should yield an error', ->
            expect(=> throw @error).to.throw('SRV record found, but contained no valid addresses')
            expect(@error.noValidAddresses).to.be.true

        describe 'when dns yields two results', ->
          beforeEach (done) ->
            @sut.markBadUrl('https://there.foo.bar:443')

            @dns.resolveSrv = sinon.stub().withArgs('_foo._https.bar').yields null, [
              {priority: 99, weight: 5, port: 443, name: 'here.foo.bar'}
              {priority: 1,  weight: 5, port: 443, name: 'there.foo.bar'}
            ]

            @sut.resolveUrl (error, @url) => done error

          it 'should return the url of the next result', ->
            expect(@url).to.deep.equal 'https://here.foo.bar:443'

      describe 'with a ttl given', ->
        describe 'when dns yields two results', ->
          beforeEach (done) ->
            @sut.markBadUrl('https://there.foo.bar:443', ttl: 100)

            @dns.resolveSrv = sinon.stub().withArgs('_foo._https.bar').yields null, [
              {priority: 99, weight: 5, port: 443, name: 'here.foo.bar'}
              {priority: 1,  weight: 5, port: 443, name: 'there.foo.bar'}
            ]

            @sut.resolveUrl (error, @url) => done error

          it 'should return the url of the next result', ->
            expect(@url).to.deep.equal 'https://here.foo.bar:443'

          describe 'when we wait 110ms', ->
            beforeEach (done) ->
              _.delay done, 110

            beforeEach (done) ->
              @sut.resolveUrl (error, @url) => done error

            it 'should return the url of the previously bad result', ->
              expect(@url).to.deep.equal 'https://there.foo.bar:443'
