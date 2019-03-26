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
      cname: "pt abc"
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
      cname: "pt asindo tech"
    },
  ],

  countrys: []
}

const rootReducer = (state = initState, action) => {
  if (action.type === "delAccount") {
    let newAccounts = state.accounts.filter(account => account.id !== action.id);
    return {
      ...state, accounts: newAccounts
    }
  }
  if (action.type === "addAccount") {
    action.account.id = Math.random();
    return {
      ...state, accounts: [...state.accounts, action.account]
    }
  }
  if (action.type === "getCountry") {
    console.log("reducer")
    return {
      ...state, countrys: action.countrys
    }
  }
  return state
}

export default rootReducer