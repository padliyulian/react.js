import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { updateAccount, getCountrys } from "../../../../actions"
import EditAccount from "../../component/form/Edit"

export class Edit extends Component {

  state = {
    info: false,
    newAccount: {
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
  } 

  clearState = () => {
    this.setState({
      info: false,
      newAccount: {
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
      }
    })
  }

  componentWillMount = () => {
    this.props.getCountrys()
  }

  handleChange = (e) => {
    const {name, value} = e.target
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

    if (this.state.newAccount.type === "individual") {
      this.setState({
        newAccount: {
          cname: ""
        }  
      })
    } else {
      this.setState({
        newAccount: {
          fname: "",
          lname: ""
        }
      })
    }

    this.props.updateAccount(this.state.newAccount)
    this.setState({info: true})
    setTimeout(() => this.clearState(), 4000)
    setTimeout(() => this.props.back.push("/"), 5000)
  }

  render() {
    return (
      <EditAccount
        info={this.state.info}
        data={this.state.newAccount}
        countrys={this.props.countrys}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

Edit.propTypes = {
  updateAccount: PropTypes.func.isRequired,
  getCountrys: PropTypes.func.isRequired,
  countrys: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  countrys: state.accounts.countrys,
  account: state.accounts.accounts.find(account => {
    return account.id === parseFloat(ownProps.id)
  })
})

export default connect(mapStateToProps, { updateAccount, getCountrys })(Edit)
