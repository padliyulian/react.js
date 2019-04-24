import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { updateAccount, getCountrys } from "../../../actions/accountActions"
import EditAccountComp from "./EditAccountComp"

class EditAccountCont extends Component {
  state = {
    id: this.props.account.id,
    name: this.props.account.name,
    number: this.props.account.number,
    code: this.props.account.code,
    address: this.props.account.address,
    city: this.props.account.city,
    country: this.props.account.country,
    currency: this.props.account.currency,
    type: this.props.account.type,
    cname: this.props.account.cname,
    fname: this.props.account.fname,
    lname: this.props.account.lname
  } 

  clearState = () => {
    this.setState({
      id: "",
      name: "",
      number: "",
      code: "",
      address: "",
      city: "",
      country: "",
      currency: "",
      type: "",
      cname: "",
      fname: "",
      lname: ""
    })
  }

  componentWillMount = () => {
    this.props.getCountrys()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.type === "individual") {
      this.setState({
        cname: ""
      })
    } else {
      this.setState({
        fname: "",
        lname: ""
      })
    }

    this.props.updateAccount(this.state)
    this.clearState()
    this.props.history.push("/")
  }

  render() {
    return (
      <EditAccountComp
        data={this.state}
        countrys={this.props.countrys}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

EditAccountCont.propTypes = {
  updateAccount: PropTypes.func.isRequired,
  getCountrys: PropTypes.func.isRequired,
  countrys: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  countrys: state.accounts.countrys,
  account: state.accounts.accounts.find(account => {
    return account.id === parseFloat(ownProps.match.params.id)
  })
})

export default connect(mapStateToProps, { updateAccount, getCountrys })(EditAccountCont)
