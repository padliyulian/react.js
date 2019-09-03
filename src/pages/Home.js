import React from "react"
import { ReactTitle } from "react-meta-tags"
import Accounts from "../components/account/AccountCont"

function Home() {
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

export default Home