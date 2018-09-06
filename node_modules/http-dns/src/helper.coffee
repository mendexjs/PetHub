url = require 'url'

class Helper
  @url: ({baseUrl, name, type}) =>
    {protocol, hostname, port} = url.parse baseUrl

    return url.format({
      protocol: protocol
      hostname: hostname
      port:     port
      pathname: 'resolve'
      query: {name, type}
    })

module.exports = Helper
