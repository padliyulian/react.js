import React, { Component } from 'react'
import Con from '../component/Confirm'

export default class Confirm extends Component {
  render() {
    const { values, prevStep, nextStep } = this.props
    return (
      <Con
        values={values}
        prevStep={prevStep}
        nextStep={nextStep}
      />
    )
  }
}