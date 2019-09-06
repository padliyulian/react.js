import React from "react"
import { ReactTitle } from "react-meta-tags"
import { AccountAdd } from "../../components/account"

function Add(props) {
  return (
    <div>
      <ReactTitle title="Account | Add" />
      <AccountAdd back={props.history} />
    </div>
  )
}

export default Add