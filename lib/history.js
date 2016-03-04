/**
 * Export `History`
 */

module.exports = History

/**
 * History class
 */

function History (store) {
  if (!(this instanceof History)) return new History(store)
  this.store = store
}

/**
 * listen
 */

History.prototype.listen = function (action) {
  var self = this
  window.addEventListener('popstate', function (event) {
    self.onpop(event.state)
  }, false)

  return this
}

/**
 * update
 */

History.prototype.update = function (action) {
  var url = window.history.state

  url && action.payload.url === url
    ? this.replace(action.payload.url)
    : this.push(action.payload.url)

  return this
}

/**
 * push
 */

History.prototype.push = function (url) {
  window.history.pushState(url, null, url)
}

/**
 * Replace
 */

History.prototype.replace = function (url) {
  window.history.replaceState(url, null, url)
}

/**
 * onpop
 */

History.prototype.onpop = function(url) {
  this.store.dispatch({ type: 'navigate', payload: { url: url } })
};

