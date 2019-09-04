import * as actionTypes from "../actions/types"
import accounts from "./accounts"

const initState = {
  accounts: accounts,
  countrys: [],
  account: {}
}

export default function (state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_ACCOUNTS:
      return {
        ...state,
        // accounts: action.payload
        accounts: state.accounts
      }
    case actionTypes.GET_COUNTRYS:
      return {
        ...state,
        countrys: action.countrys
      }  
    case actionTypes.ADD_ACCOUNT:
      action.newAccount.id = Math.random()
      return {
        ...state,
        accounts: [...state.accounts, action.newAccount]
      }
    case actionTypes.DEL_ACCOUNT:
      let newAccounts = state.accounts.filter(account => account.id !== action.id)
      return {
        ...state,
        accounts: newAccounts
      }
    case actionTypes.DETAIL_ACCOUNT:
      let findAccount = state.accounts.find(account => {
        return account.id === parseFloat(action.id)
      })
      return {
        ...state,
        account: findAccount
      }  
    case actionTypes.UPDATE_ACCOUNT:
      const newData = state.accounts.filter(account => {
        if(account.id === action.account.id) {
          account.name = action.account.name
          account.number = action.account.number
          account.code = action.account.code
          account.address = action.account.address
          account.city = action.account.city
          account.country = action.account.country
          account.currency = action.account.currency
          account.type = action.account.type
          account.cname = action.account.cname
          account.fname = action.account.fname
          account.lname = action.account.lname
        }
        return state
      })
      return {
        ...state,
        accounts: newData
      }
    default:
      return state
  }
}