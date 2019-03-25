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