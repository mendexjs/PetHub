{afterEach, beforeEach, describe, it} = global
{expect}      = require 'chai'

enableDestroy = require 'server-destroy'
shmock        = require 'shmock'
url           = require 'url'

Cache = require '../src/cache'
dns = require '../src'

describe '->resolveSrv', ->
  beforeEach ->
    Cache.clearAll()
    @dnsServer = shmock()
    enableDestroy @dnsServer
    dns.DNS_HTTP_SERVER = url.format protocol: 'http', hostname: 'localhost', port: @dnsServer.address().port

  afterEach (done) ->
    @dnsServer.destroy done

  describe 'when an SRV record exists', ->
    beforeEach ->
      response = {
        Status: 0
        Answer: [{
          name: "_this._http.example.org."
          type: 33
          TTL: 1
          data: "10 5 80 meshblu-http.example.org."
        }]
      }

      responseHeaders = {
        'Content-Type': 'application/x-javascript; charset=UTF-8'
      }

      @dnsServer
        .get '/resolve'
        .query type: 'SRV', name: '_this._http.example.org'
        .reply 200, response, responseHeaders

    describe 'when queried for the extant record', ->
      beforeEach (done) ->
        dns.resolveSrv '_this._http.example.org', (error, @addresses) => done error

      it 'should yield the records', ->
        expect(@addresses).to.deep.equal [{ priority: 10, weight: 5, port: 80, name: 'meshblu-http.example.org' }]

      describe 'when queried again within the TTL period', ->
        beforeEach (done) ->
          @dnsServer
            .get '/resolve'
            .query type: 'SRV', name: '_this._http.example.org'
            .reply 599

          dns.resolveSrv '_this._http.example.org', (error, @addresses) => done error

        it 'should yield the records', ->
          expect(@addresses).to.deep.equal [{ priority: 10, weight: 5, port: 80, name: 'meshblu-http.example.org' }]

      describe 'when queried again outside the TTL period', ->
        beforeEach 'set new SRV response', ->
          response = {
            Status: 0
            Answer: [{
              name: "_this._http.example.org."
              type: 33
              TTL: 229
              data: "10 5 80 meshblu-http.somewhere.else."
            }]
          }

          responseHeaders = {
            'Content-Type': 'application/x-javascript; charset=UTF-8'
          }

          @dnsServer
            .get '/resolve'
            .query type: 'SRV', name: '_this._http.example.org'
            .reply 200, response, responseHeaders

        beforeEach (done) ->
          @timeout 3000

          setTimeout =>
            dns.resolveSrv '_this._http.example.org', (error, @addresses) => done error
          , 2000

        it 'should yield the new record', ->
          expect(@addresses).to.deep.equal [{ priority: 10, weight: 5, port: 80, name: 'meshblu-http.somewhere.else' }]

  describe 'when an SRV does not exist', ->
    beforeEach ->
      response = {
        Status: 0
        Question: [{ # needed for the error message
          name: "_meshblu._bleh.octoblu.com."
          type: 33
        }]
      }

      responseHeaders = {
        'Content-Type': 'application/x-javascript; charset=UTF-8'
      }

      @dnsServer
        .get '/resolve'
        .query type: 'SRV', name: '_this._http.example.org'
        .reply 200, response, responseHeaders

    describe 'when queried for the extant record', ->
      beforeEach (done) ->
        dns.resolveSrv '_this._http.example.org', (@error, @addresses) => done()

      it 'should yield no addresses', ->
        expect(@addresses).not.to.exist

      it 'should yield an ENODATA', ->
        expect(@error).to.exist
        expect(@error.code).to.deep.equal 'ENODATA'
        expect(@error.errno).to.deep.equal 'ENODATA'
        expect(@error.syscall).to.deep.equal 'querySrv'
        expect(@error.hostname).to.deep.equal '_meshblu._bleh.octoblu.com'
        expect(@error.message).to.deep.equal 'querySrv ENODATA _meshblu._bleh.octoblu.com'
