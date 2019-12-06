import * as actionTypes from "./types"
import axios from "axios"


export const setLogin = (status, data) => dispatch => {
  dispatch({
    type: actionTypes.SET_LOGIN,
    value: status,
    user: data
  })
}

export const login = (values) => dispatch => {
  axios.post('http://devsrv.mindaperdana.com/test-api/public/api/user/login', values)
    .then(() => dispatch({
      type: actionTypes.LOGIN,
      user: values
    }))
}
