import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const FormUserDetail = (props) => {
  const { values, handleChange, nextStep } = props
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter User Detail" />
        <TextField
          hintText="Enter Your First Name"
          floatingLabelText="First Name"
          onChange={handleChange("fName")}
          defaultValue={values.fName}
        />
        <TextField
          hintText="Enter Your Last Name"
          floatingLabelText="Last Name"
          onChange={handleChange("lName")}
          defaultValue={values.lName}
        />
        <TextField
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={nextStep}
        />
      </React.Fragment>
    </MuiThemeProvider>
  )  
}

const styles = {
  button: {
    margin: 15
  }
}

export default FormUserDetail
