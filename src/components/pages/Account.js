import React, { Component } from 'react';
import { connect } from "react-redux"

class Account extends Component {
  render() {
    const { account } = this.props
    console.log(account)
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <p>Account {account.id}</p>
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