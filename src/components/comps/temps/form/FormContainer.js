import React, { Component } from "react"
import FormUI from "./FormUI"

// from this titorial
// https://www.youtube.com/watch?v=DLX62G4lc44&t=14500s

class FormContainer extends Component {
  state = {
    id: Math.random(),
    name: "",
    sex: "",
    div: "",
    react: false,
    vue: false,
    angular: false,
    note: ""
  }

  handelChange = (e) => {
    const { name, value, checked, type  } = e.target
    if (type === "checkbox") {
      this.setState({
        [name]: checked
      })
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  handelSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.clearState()
  }

  clearState = () => {
    this.setState({
      id: "",
      name: "",
      sex: "",
      div: "",
      react: false,
      vue: false,
      angular: false,
      note: ""
    })
  }

  render() {
    return (
      <div>
        <FormUI
          data={this.state}
          handleChange={this.handelChange}
          handleSubmit={this.handelSubmit}
        />
      </div>
    )
  }
}

export default FormContainer