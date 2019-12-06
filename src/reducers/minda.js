import * as actionTypes from "../actions/types"

const initState = {
    loggedIn: false,
    user: {}
}

export default function (state = initState, action) {
  switch (action.type) {
    case actionTypes.SET_LOGIN:
        return {
            ...state,
            loggedIn: action.value,
            user: action.user
        }
    case actionTypes.LOGIN:
      return {
       
      }  
    default:
      return state
  }
}