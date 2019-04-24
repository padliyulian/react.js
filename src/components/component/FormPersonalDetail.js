import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const FormPersonalDetail = (props) => {
  const { values, handleChange, nextStep, prevStep } = props
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter Personal Detail" />
        <TextField
          hintText="Enter Your Occupation"
          floatingLabelText="Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <TextField
          hintText="Enter Your City"
          floatingLabelText="City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <TextField
          hintText="Enter Your Bio"
          floatingLabelText="Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={prevStep}
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

export default FormPersonalDetail
