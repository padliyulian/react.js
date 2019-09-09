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
      lname: "",
    },
    error: {
      name: false,
      number: false,
      code: false,
      address: false,
      city: false,
      country: false,
      currency: false,
      type: false,
      cname: false,
      fname: false,
    }
  }

  componentWillMount() {
    this.props.getCountrys();
  }

  handleValidate = (event) => {
    const {name, value} = event.target
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

    Object.keys(this.state.newAccount).map(key => {
      return this.state.newAccount[key] === '' && this.setState(prevState => {
        return {
          error: {
            ...prevState.error,
            [key]: true
          }
        }
      })
    })

    return console.log(this.state.newAccount)

    // if (this.state.newAccount.name === '') {
    //   this.setState(prevState => {
    //     return {
    //       error: {
    //         ...prevState.error,
    //         name: true
    //       }
    //     }
    //   })
    // }

    // if (this.state.newAccount.number === '') {
    //   this.setState(prevState => {
    //     return {
    //       error: {
    //         ...prevState.error,
    //         number: true
    //       }
    //     }
    //   })
    // }

    // if (this.state.newAccount.code === '') {
    //   this.setState(prevState => {
    //     return {
    //       error: {
    //         ...prevState.error,
    //         code: true
    //       }
    //     }
    //   })
    // }

    // if (this.state.newAccount.address === '') {
    //   this.setState(prevState => {
    //     return {
    //       error: {
    //         ...prevState.error,
    //         address: true
    //       }
    //     }
    //   })
    // }

    // if (this.state.newAccount.city === '') {
    //   this.setState(prevState => {
    //     return {
    //       error: {
    //         ...prevState.error,
    //         city: true
    //       }
    //     }
    //   })
    // }

    // if (this.state.newAccount.country === '') {
    //   this.setState(prevState => {
    //     return {
    //       error: {
    //         ...prevState.error,
    //         country: true
    //       }
    //     }
    //   })
    // }

    // if (this.state.newAccount.currency === '') {
    //   this.setState(prevState => {
    //     return {
    //       error: {
    //         ...prevState.error,
    //         currency: true
    //       }
    //     }
    //   })
    // }

    // if (this.state.newAccount.type === '') {
    //   this.setState(prevState => {
    //     return {
    //       error: {
    //         ...prevState.error,
    //         type: true
    //       }
    //     }
    //   })
    // }

    // this.props.addAccount(this.state.newAccount)
    // this.setState({info: true})
    // setTimeout(() => {
    //   this.clearState()
    //   this.props.back.push("/")
    // }, 5000)
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
        error={this.state.error}
        info={this.state.info}
        data={this.state.newAccount}
        countrys={this.props.countrys}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleValidate={this.handleValidate}
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