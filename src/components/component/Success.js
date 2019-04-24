import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

const Success = () => {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Success" />
        <h4>Thank You For Submission</h4>
      </React.Fragment>
    </MuiThemeProvider>
  )
}

export default Success