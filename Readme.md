
# redux-routes

  Simple redux routing middleware. Doesn't provide reducers or actions.

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
