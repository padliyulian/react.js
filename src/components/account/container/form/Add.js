import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addAccount, getCountrys } from "../../../../actions"
import AddAccount from "../../component/form/Add"

export class Add extends Component {
  state = {
    info: false,
    newAccount: {
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
  }

  componentWillMount() {
    this.props.getCountrys();
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState(prevState => {
      return {
        newAccount : {
          ...prevState.newAccount,
          [name]: value
        }
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addAccount(this.state.newAccount)
    this.setState({info: true})
    setTimeout(() => {
      this.clearState()
      this.props.back.push("/")
    }, 5000)
  }

  clearState = () => {
    this.setState({
      info: false,
      newAccount: {
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
    })
  }

  render() {
    return (
      <AddAccount
        info={this.state.info}
        data={this.state.newAccount}
        countrys={this.props.countrys}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

Add.propTypes = {
  addAccount: PropTypes.func.isRequired,
  getCountrys: PropTypes.func.isRequired,
  countrys: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  countrys: state.accounts.countrys
})

export default connect(mapStateToProps, { addAccount, getCountrys })(Add)