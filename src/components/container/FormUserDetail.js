import React, { Component } from 'react'
import UserDetail from '../component/FormUserDetail'

export default class FormUserDetail extends Component {
  render() {
    const { values, nextStep, handleChange } = this.props
    return (
      <UserDetail
        values={values}
        nextStep={nextStep}
        handleChange={handleChange}  
      />
    )
  }
}