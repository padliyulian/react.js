import {
  GET_ACCOUNTS,
  GET_COUNTRYS,
  ADD_ACCOUNT,
  DEL_ACCOUNT,
  DETAIL_ACCOUNT,
  UPDATE_ACCOUNT
} from "./types"

import axios from "axios"

export const getAccounts = () => dispatch => {
  dispatch({
    type: GET_ACCOUNTS
  })
}

export const delAccount = (id) => dispatch => {
  dispatch({
    type: DEL_ACCOUNT,
    id: id
  })
}

export const detAccount = (id) => dispatch => {
  dispatch({
    type: DETAIL_ACCOUNT,
    id: id
  })
}

export const addAccount = (newAccount) => dispatch => {
  dispatch({
    type: ADD_ACCOUNT,
    newAccount: newAccount
  })
}

export const getCountrys = () => dispatch => {
  axios.get("https://restcountries.eu/rest/v2/all")
    .then(res => dispatch({
      type: GET_COUNTRYS,
      countrys: res.data
    }))
}

export const updateAccount = (account) => dispatch => {
  dispatch({
    type: UPDATE_ACCOUNT,
    account: account
  })
}



