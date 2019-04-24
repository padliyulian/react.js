import React, { Component } from 'react'
import FormUserDetail from './FormUserDetail'
import FormPersonalDetail from './FormPersonalDetail'
import Confirm from './Confirm'
import Success from '../component/Success'

export default class UserForm extends Component {
  state = {
    step: 1,
    fName: '',
    lName: '',
    email: '',
    accupation: '',
    city: '',
    bio: ''
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => ev => {
    this.setState({
      [input]: ev.target.value
    })
  }

  render() {
    const {
      step,
      fName,
      lName,
      email,
      occupation,
      city,
      bio
    } = this.state

    const values = {
      step,
      fName,
      lName,
      email,
      occupation,
      city,
      bio
    }

    switch (step) {
      case 1:
        return (
          <FormUserDetail
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <FormPersonalDetail
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Confirm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        )
      case 4:
        return <Success />  
      default:
        return
    }
  }
}
