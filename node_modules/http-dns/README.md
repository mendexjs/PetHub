# http-dns
Node DNS library that uses Google's HTTPS DNS API for doing queries in the browser

# NOTE: only resolveSrv is supported at this time

## dns.resolveSrv(hostname, callback)

Uses the DNS protocol to resolve service records (SRV records) for the hostname. The addresses argument passed to the callback function will be an array of objects with the following properties:

* priority
* weight
* port
* name

```javascript
{
  priority: 10,
  weight: 5,
  port: 21223,
  name: 'service.example.com'
}
```

[![Build Status](https://travis-ci.org/octoblu/http-dns.svg?branch=master)](https://travis-ci.org/octoblu/http-dns)
[![Test Coverage](https://codecov.io/gh/octoblu/http-dns/branch/master/graph/badge.svg)](https://codecov.io/gh/octoblu/http-dns)
[![Dependency status](http://img.shields.io/david/octoblu/http-dns.svg?style=flat)](https://david-dm.org/octoblu/http-dns)
[![devDependency Status](http://img.shields.io/david/dev/octoblu/http-dns.svg?style=flat)](https://david-dm.org/octoblu/http-dns#info=devDependencies)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

[![NPM](https://nodei.co/npm/http-dns.svg?style=flat)](https://npmjs.org/package/http-dns)
