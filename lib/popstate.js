/**
 * Module Dependencies
 */

module.exports = popstate

/**
 * Fix popstate for safari
 *
 * Yanked from: https://github.com/visionmedia/page.js/blob/4895e378a7080a519390e286a22b02a87a055b10/index.js#L509-L536
 */

function popstate(fn) {
  var loaded = false;
  if ('undefined' === typeof window) {
    return;
  }
  if (document.readyState === 'complete') {
    loaded = true;
  } else {
    window.addEventListener('load', function() {
      setTimeout(function() {
        loaded = true;
      }, 0);
    });
  }

  return function onpopstate(e) {
    if (!loaded) return
    fn(e)
  }
}
