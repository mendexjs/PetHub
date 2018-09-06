_ = {
  get:     require 'lodash/get'
  map:     require 'lodash/map'
  split:   require 'lodash/split'
  trimEnd: require 'lodash/trimEnd'
}

class Srv
  @ENODATA: ({body}) =>
    error = new Error()
    error.code = 'ENODATA'
    error.errno = 'ENODATA'
    error.syscall = 'querySrv'
    error.hostname = _.trimEnd _.get(body, 'Question.0.name'), '.'
    error.message = "#{error.syscall} #{error.errno} #{error.hostname}"
    return error

  @parseResult: (result, callback) ->
    return callback new Error "Unexpected error: #{result.body}" unless result.ok

    try
      body = JSON.parse(result.text)
    catch error
      return callback error

    records = _.get(body, 'Answer')
    return callback Srv.ENODATA({body}) unless records?
    return callback null, _.map(records, Srv.parseRecord)

  @parseRecord: (record) ->
    [priority, weight, port, name] = _.split record.data, ' '
    return {
      ttl: record.TTL
      address:
        name:     _.trimEnd name, '.'
        priority: parseInt(priority)
        weight:   parseInt(weight)
        port:     parseInt(port)
    }

module.exports = Srv
