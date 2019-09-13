import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { updateAccount, getCountrys } from "../../../../actions"
import EditAccount from "../../component/form/Edit"

// on this form i want to show form validation without formik & yup
export class Edit extends Component {

  state = {
    info: false,
    isValid: false,
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
    },
    error: {
      name: false,
      number: false,
      code: false,
      address: false,
      city: false,
    }
  } 

  clearState = () => {
    this.setState({
      info: false,
      isValid: false,
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
      },
      error: {
        name: false,
        number: false,
        code: false,
        address: false,
        city: false,
      }
    })
  }

  componentWillMount = () => {
    this.props.getCountrys()
  }

  handleValidation = (e) => {
    const {name, value} = e.target
    if (value === '') {
      this.setState(prevState => {
        return {
          error : {
            ...prevState.error,
            [name]: true
          }
        }
      })
    } else {
      this.setState(prevState => {
        return {
          error : {
            ...prevState.error,
            [name]: false
          }
        }
      })
    }
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

    if (this.state.error.name !== true &&
        this.state.error.number !== true &&
        this.state.error.code !== true &&
        this.state.error.address !== true &&
        this.state.error.city !== true)
    {
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
    } else {
      this.setState({isValid: true})
    }   
  }

  render() {
    return (
      <EditAccount
        isValid={this.state.isValid}
        error={this.state.error}
        info={this.state.info}
        data={this.state.newAccount}
        countrys={this.props.countrys}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleValidation={this.handleValidation}
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
