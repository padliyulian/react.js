import React, { Component } from 'react'
import { ReactTitle } from 'react-meta-tags'
import Accounts from "../comps/bank/AccountCont"

class Home extends Component {
  render() {
    return (
      <div className="container">
        <ReactTitle title="Account | Home" />
        <div className="row">
          <div className="col s12">
            <Accounts />
          </div>
        </div>
      </div>  
    )
  }
}

export default Home