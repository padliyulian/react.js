import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getAccounts, delAccount } from "../../actions/accountActions"
import AccountComp from "./AccountComp"

class AccountCont extends Component {

  componentWillMount() {
    this.props.getAccounts()
  }

  render() {
    const { accounts, delAccount } = this.props
    return <AccountComp accounts={accounts} delAccount={delAccount} />
  }

}

AccountCont.propTypes = {
  getAccounts: PropTypes.func.isRequired,
  delAccount: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  accounts: state.accounts.accounts
})

export default connect(mapStateToProps, { getAccounts, delAccount })(AccountCont)
