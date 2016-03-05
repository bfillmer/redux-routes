
# redux-routes

  Simple redux history middleware.

  Doesn't provide a reducer because reducers are application-specific. You'll want to save the payload (the `action.payload.url`) somewhere in your store so you can use it for routing.

  There's nothing new here, [@callum](https://github.com/callum) did all the work in [redux-routing](https://github.com/callum/redux-routing). This module just pulls out the History API and the middleware from that module.

## Install

```bash
npm install redux-routes
```

## Example

```js
var History = require('redux-routes')
var Socrates = require('socrates')
var navigate = History.navigate

var store = Socrates([
  History()
])

store.dispatch(navigate('/blog'))
```

## License

MIT
