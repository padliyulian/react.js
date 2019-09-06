import React from "react"
import { ReactTitle } from "react-meta-tags"
import { AccountDetail } from "../../components/account"

function Detail(props) {
  return (
    <div>
      <ReactTitle title="Account | Detail" />
      <AccountDetail id={props.match.params.id} back={props.history} />
    </div>
  )
}

export default Detail