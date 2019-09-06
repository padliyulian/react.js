import React from "react"
import { ReactTitle } from "react-meta-tags"
import { AccountEdit } from "../../components/account"

function Edit(props) {
  return (
    <div>
      <ReactTitle title="Account | Edit" />
      <AccountEdit id={props.match.params.id} back={props.history} />
    </div>
  )
}

export default Edit