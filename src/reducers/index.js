import { combineReducers } from "redux"
import accountReducer from "./account"
import mindaReducer from "./minda"

export default combineReducers({
  accounts: accountReducer,
  minda: mindaReducer
})
