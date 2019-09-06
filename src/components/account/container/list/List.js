import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getAccounts, delAccount } from "../../../../actions"
import Account from "../../component/list/List"

export class List extends Component {

  componentWillMount() {
    this.props.getAccounts()
  }

  render() {
    const { accounts, delAccount } = this.props
    return <Account accounts={accounts} delAccount={delAccount} />
  }

}

List.propTypes = {
  getAccounts: PropTypes.func.isRequired,
  delAccount: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  accounts: state.accounts.accounts
})

export default connect(mapStateToProps, { getAccounts, delAccount })(List)
