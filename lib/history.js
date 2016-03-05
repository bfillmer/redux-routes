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

  if (url && action.payload.url === url) {
    this.replace(action.payload.url)
  } else {
    this.push(action.payload.url)

    // Scroll to the top after we update the page
    //
    // TODO: this may not always be the case,
    // like perhaps with link targets. For now,
    // I think it's a good default though.
    window.scroll(0, 0)
  }

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

