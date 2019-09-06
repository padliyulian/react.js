import React from "react"
import { ReactTitle } from "react-meta-tags"
import { AccountList } from "../../components/account"

function List() {
  return (
    <div>
      <ReactTitle title="Account | List" />
      <AccountList />
    </div>  
  )
}

export default List