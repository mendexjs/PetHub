superagent = require 'superagent'

_ = {
  each: require 'lodash/each'
  map:  require 'lodash/map'
}

Helper = require './helper'
Srv    = require './srv'
Cache  = require './cache'

class Dns
  @DNS_HTTP_SERVER: 'https://dns.google.com'

  @resolveSrv: (hostname, callback) ->
    return callback null, Cache.get('SRV', hostname) if Cache.has('SRV', hostname)

    request = superagent
      .get Helper.url(baseUrl: Dns.DNS_HTTP_SERVER, name: hostname, type: 'SRV')
      .set 'Accept', 'application/json'

    request = request.buffer true unless window?

    request.end (error, result) ->
      return callback error if error?
      Srv.parseResult result, (error, records) =>
        return callback error if error?
        Dns._cacheRecords 'SRV', hostname, records
        callback null, _.map(records, 'address')
      return

    return # no promises

  @_cacheRecords: (type, hostname, records) =>
    _.each records, (record) =>
      Cache.set type, hostname, record.address, record.ttl

module.exports = Dns
