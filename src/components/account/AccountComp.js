import React from "react"
import { Link } from "react-router-dom"

const AccountComp = (props) => {

  const { accounts, delAccount } = props
  const style = { overflow: "auto" }
  let account = null 
  
  if (accounts.length) {
    account = accounts.map((account, index) => {
      return (
        <tr key={account.id}>
          <td className="center-align">
            {index + 1}
          </td>
          <td>
            <Link to={"/account/" + account.id}>
              {account.name}
            </Link>
          </td>
          <td>{account.number}</td>
          <td>{account.code}</td>
          <td>{account.address}</td>
          <td>{account.city}</td>
          <td>{account.country}</td>
          <td>{account.currency}</td>
          <td>
            <Link
              className="btn btn-small waves-effect red lighten-2 left"
              to={"/editAccount/" + account.id}
            >
              edit
            </Link>
            <button
              className="btn btn-small waves-effect red lighten-2 right"
              onClick={() => delAccount(account.id)}
            >
              delete
            </button>
          </td>
        </tr>
      )
    })
  } else {
    account = (
      <tr>
        <td colSpan="9" className="center-align">
          No data to view...
        </td>
      </tr>
    )
  }

  return (
    <div style={style}>
      <table>
        <thead>
          <tr>
            <th className="center-align">No</th>
            <th>Name</th>
            <th>Number</th>
            <th>Code</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Currency</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { account }
        </tbody>
      </table>
    </div>
  )

}

export default AccountComp
