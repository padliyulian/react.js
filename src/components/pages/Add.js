import React, { Component } from 'react'
import { ReactTitle } from 'react-meta-tags'
import AddAccount from "../comps/bank/AddAccountCont"

class Add extends Component {
  render() {
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
}

export default Add