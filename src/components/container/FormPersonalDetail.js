import React, { Component } from 'react'
import PersonalDetail from '../component/FormPersonalDetail'

export default class FormPersonalDetail extends Component {
  render() {
    const { values, prevStep, nextStep, handleChange } = this.props
    return (
      <PersonalDetail
        values={values}
        prevStep={prevStep}
        nextStep={nextStep}
        handleChange={handleChange}
      />
    )
  }
}