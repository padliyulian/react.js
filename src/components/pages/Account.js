import React, { Component } from 'react';
import "./Account.css"
import { connect } from "react-redux"

class Account extends Component {
  render() {
    const { account } = this.props
    return (
      <div className="container bk-count">
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-content">
                <span className="card-title center-align">Account Detail</span>
                <div>
                  <h6>Holder Name</h6>
                  <p>
                    {account.name}
                  </p>
                </div>
                <div>
                  <h6>Account Number</h6>
                  <p>
                    {account.number}
                  </p>
                </div>
                <div>
                  <h6>Swift Code</h6>
                  <p>
                    {account.code}
                  </p>
                </div>
                <div>
                  <h6>Address</h6>
                  <p>
                    {account.address}
                  </p>
                </div>
                <div>
                  <h6>City</h6>
                  <p>
                    {account.city}
                  </p>
                </div>
                <div>
                  <h6>Country</h6>
                  <p>
                    {account.country}
                  </p>
                </div>
                <div>
                  <h6>Currency</h6>
                  <p>
                    {account.currency}
                  </p>
                </div>
                <div>
                  <h6>Type</h6>
                  <p>
                    {account.type}
                  </p>
                </div>
                {account.cname ? (
                  <div>
                    <h6>Company Name</h6>
                    <p>
                      {account.cname}
                    </p>
                  </div>
                ) : (
                  <div>
                    <div>
                      <h6>First Name</h6>
                      <p>
                        {account.fname}
                      </p>
                    </div>
                    <div>
                      <h6>Last Name</h6>
                      <p>
                        {account.lname}
                      </p>
                    </div>
                  </div>  
                )}
              </div>
              <div className="card-action">
                <button
                  className="btn btn-small waves-effect red lighten-2"
                  onClick={() => this.props.history.push("/")}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id
  return {
    account: state.accounts.find(account => {
      return account.id == id
    })
  }
}

export default connect(mapStateToProps)(Account);