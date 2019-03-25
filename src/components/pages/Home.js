import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { delAccount } from "../../actions/crud"
import "./Home.css"

class Home extends Component {
  delAccount = (id) => {
    this.props.delAccount(id)
  }

  render() {
    const { accounts } = this.props
    const account = accounts.length ? (
        accounts.map((account, index) => {
          return (
            <tr key={account.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={"/account/"+ account.id}>
                  {account.name}
                </Link>
              </td>
              <td>{account.number}</td>
              <td>{account.code}</td>
              <td>{account.address}</td>
              <td>{account.city}</td>
              <td>{account.country}</td>
              <td>{account.currency}</td>
              {/* <td>{account.type}</td>
              <td>{account.cname ? account.cname:"-"}</td>
              <td>{account.fname ? account.fname:"-"}</td>
              <td>{account.lname ? account.lname:"-"}</td> */}
              <td>
                <a className="btn btn-small waves-effect red lighten-2 left" href="#!">
                  edit
                </a> 
                <button
                  className="btn btn-small waves-effect red lighten-2 right"
                  onClick={() => this.delAccount(account.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          )
        })
      ) : (
        <tr>
          <td colSpan="9" className="center-align">
            No data to view...
          </td>
        </tr>
      )

    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="tab-con">
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Code</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Currency</th>
                    {/* <th>Type</th>
                    <th>Company</th>
                    <th>First Name</th>
                    <th>Last Name</th> */}
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {account}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delAccount: (id) => {
      dispatch(delAccount(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);