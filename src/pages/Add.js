import React from "react"
import { ReactTitle } from "react-meta-tags"
import AddAccount from "../components/account/AddAccountCont"

function Add() {
  return (
    <div className="container">
      <ReactTitle title="Account | Add" />
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <AddAccount />
        </div>
      </div>
    </div>
  )
}

export default Add