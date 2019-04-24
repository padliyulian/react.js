import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addAccount, getCountrys } from "../../../actions/accountActions"
import AddAccountComp from "./AddAccountComp"

class AddAccountCont extends Component {
  state = {
    info: false,
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
  }

  componentWillMount() {
    this.props.getCountrys();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newData = {
      name: this.state.name,
      number: this.state.number,
      code: this.state.code,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      currency: this.state.currency,
      type: this.state.type,
      cname: this.state.cname,
      fname: this.state.fname,
      lname: this.state.lname
    }
    this.props.addAccount(newData)
    this.clearState()
    this.setState({info: true})
    setTimeout(() => this.setState({ info: false }), 5000)
    // this.props.history.push("/")
  }

  clearState = () => {
    this.setState({
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

  render() {
    return (
      <AddAccountComp
        info={this.state.info}
        data={this.state}
        countrys={this.props.countrys}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

AddAccountCont.propTypes = {
  addAccount: PropTypes.func.isRequired,
  getCountrys: PropTypes.func.isRequired,
  countrys: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  countrys: state.accounts.countrys
})

export default connect(mapStateToProps, { addAccount, getCountrys })(AddAccountCont)