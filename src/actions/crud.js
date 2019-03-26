import axios from "axios"

export const delAccount = (id) => {
  return {
    type: "delAccount",
    id: id
  }
}

export const addAccount = (account) => {
  return {
    type: "addAccount",
    account: account
  }
}

export function getCountry() {
  let x = []
  axios.get("https://restcountries.eu/rest/v2/all")
    .then(res => {
      [x] res.data
    })
  return {
    type: "getCountry",
    
  }
}