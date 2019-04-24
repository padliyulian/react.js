import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

const Confirm = (props) => {
  const { values, prevStep, nextStep } = props
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Confirm User Data" />
        <List>
          <ListItem
            primaryText="First Name"
            secondaryText={values.fName}
          />
          <ListItem
            primaryText="Last Name"
            secondaryText={values.lName}
          />
          <ListItem
            primaryText="Email"
            secondaryText={values.email}
          />
          <ListItem
            primaryText="Occupation"
            secondaryText={values.occupation}
          />
          <ListItem
            primaryText="City"
            secondaryText={values.city}
          />
          <ListItem
            primaryText="Bio"
            secondaryText={values.bio}
          />
        </List>  
        <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={prevStep}
        />
        <RaisedButton
          label="Confirm"
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

export default Confirm
