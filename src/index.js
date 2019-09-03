import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const initState = {}
const middleware = [thunk]
const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(...middleware)
  // compose(
  //     applyMiddleware(...middleware),
  //     window.navigator.userAgent.includes("Chrome") ?
  //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
  // )
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()