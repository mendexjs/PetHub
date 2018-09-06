_ = {
  pull: require 'lodash/pull'
  isEmpty: require 'lodash/isEmpty'
}
CACHE = {}

class Cache
  @clearAll: =>
    CACHE = {}

  @get: (type, hostname) =>
    return CACHE[type]?[hostname]

  @has: (type, hostname) =>
    return CACHE[type]?[hostname]?

  @pull: (type, hostname, address) =>
    _.pull CACHE[type]?[hostname], address
    delete CACHE[type]?[hostname] if _.isEmpty CACHE[type]?[hostname]

  @set: (type, hostname, address, ttl) =>
    CACHE[type] ?= {}
    CACHE[type][hostname] ?= []
    CACHE[type][hostname].push address

    deleteAddress = => Cache.pull('SRV', hostname, address)
    delay = 1000 * ttl
    setTimeout deleteAddress, delay


module.exports = Cache
