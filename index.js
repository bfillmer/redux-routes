/**
 * Tiny history middleware
 */

var querystring = require('querystring')
var History = require('./lib/history')
var parse = require('url').parse

/**
 * Export `middleware`
 */

module.exports = middleware['default'] = middleware
middleware.navigate = navigate

/**
 * middleware middleware
 *
 * @param {Object} options
 * @return {Function}
 */

function middleware (options) {
  return function (store) {
    var history = History(store).listen()

    return function (next) {
      return function (action) {
        if (action.type !== '@@redux-routes/navigate') return next(action)
        var url = parse(action.payload.url)

        var location = {
          hash: url.hash || undefined,
          pathname: url.pathname,
          search: url.search || undefined
        }

        var query = url.query ? qs.parse(url.query) : null

        action.payload.url = url.format(location)
        var result = next(action)

        history.update(result)

        return result
      }
    }
  }
}

/**
 * Navigate action creator
 *
 * @param {String} url
 * @return {Object} action
 */

function navigate (url) {
  return {
    type: '@@redux-routes/navigate',
    payload: { url: url }
  }
}
