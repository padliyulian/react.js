import * as actionTypes from "./types"
import axios from "axios"

export const getAccounts = () => dispatch => {
  dispatch({
    type: actionTypes.GET_ACCOUNTS
  })
}

export const delAccount = (id) => dispatch => {
  dispatch({
    type: actionTypes.DEL_ACCOUNT,
    id: id
  })
}

export const detAccount = (id) => dispatch => {
  dispatch({
    type: actionTypes.DETAIL_ACCOUNT,
    id: id
  })
}

export const addAccount = (newAccount) => dispatch => {
  dispatch({
    type: actionTypes.ADD_ACCOUNT,
    newAccount: newAccount
  })
}

export const getCountrys = () => dispatch => {
  axios.get("https://restcountries.eu/rest/v2/all")
    .then(res => dispatch({
      type: actionTypes.GET_COUNTRYS,
      countrys: res.data
    }))
}

export const updateAccount = (account) => dispatch => {
  dispatch({
    type: actionTypes.UPDATE_ACCOUNT,
    account: account
  })
}



