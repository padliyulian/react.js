import { GET_ACCOUNTS, GET_COUNTRYS, ADD_ACCOUNT, DEL_ACCOUNT, DETAIL_ACCOUNT, UPDATE_ACCOUNT } from "../actions/types"

const initState = {
  accounts: [
    {
      id: 1,
      name: "padli yulian",
      number: 123,
      code: 321,
      address: "Jl. Mawar No3 Pahoman",
      city: "Bandar Lampung",
      country: "Indonesia",
      currency: "IDR",
      type: "individual",
      cname: "",
      fname: "padli",
      lname: "yulian"
    },
    {
      id: 2,
      name: "iwan saputra",
      number: 124,
      code: 421,
      address: "Jl. dahlia 3 No 176",
      city: "Jakarta Pusat",
      country: "Indonesia",
      currency: "IDR",
      type: "company",
      cname: "pt abc",
      fname: "",
      lname: ""
    },
    {
      id: 3,
      name: "rudi agus",
      number: 125,
      code: 521,
      address: "Jl. Safira No. 12",
      city: "Bandung",
      country: "Indonesia",
      currency: "IDR",
      type: "individual",
      cname: "",
      fname: "rudi",
      lname: "agus"
    },
    {
      id: 4,
      name: "nanang qosim",
      number: 126,
      code: 621,
      address: "Jl. Maju Mundur",
      city: "Pangkalpinang",
      country: "Indonesia",
      currency: "IDR",
      type: "company",
      cname: "pt asindo tech",
      fname: "",
      lname: ""
    }
  ],
  countrys: [],
  account: {}
}

export default function (state = initState, action) {
  switch (action.type) {
    case GET_ACCOUNTS:
      return {
        ...state,
        // accounts: action.payload
        accounts: state.accounts
      }
    case GET_COUNTRYS:
      return {
        ...state,
        countrys: action.payload
      }  
    case ADD_ACCOUNT:
      action.payload.id = Math.random()
      return {
        ...state,
        accounts: [...state.accounts, action.payload]
      }
    case DEL_ACCOUNT:
      let newAccounts = state.accounts.filter(account => account.id !== action.payload);
      return {
        ...state,
        accounts: newAccounts
      }
    case DETAIL_ACCOUNT:
      let findAccount = state.accounts.find(account => {
        return account.id === parseFloat(action.payload)
      })
      return {
        ...state,
        account: findAccount
      }  
    case UPDATE_ACCOUNT:
      const newData = state.accounts.filter(account => {
        if(account.id === action.payload.id) {
          account.name = action.payload.name
          account.number = action.payload.number
          account.code = action.payload.code
          account.address = action.payload.address
          account.city = action.payload.city
          account.country = action.payload.country
          account.currency = action.payload.currency
          account.type = action.payload.type
          account.cname = action.payload.cname
          account.fname = action.payload.fname
          account.lname = action.payload.lname
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