import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class PrivateRoute extends Component {
    render() {
        const {component: Component, ...rest} = this.props
        console.log(this.props.loggedIn)
        console.log(this.props.user)
        return (
            <Route
                {...rest}
                render={() => this.props.loggedIn === true ? <Component {...this.props} /> : <Redirect to={{pathname: '/', state: {from: this.props.location}}} />}
            />
        )
    }
}

PrivateRoute.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
}
  
const mapStateToProps = state => ({
    loggedIn: state.minda.loggedIn,
    user: state.minda.user
})
  
export default connect(mapStateToProps, {})(PrivateRoute)

