import React, { Component } from 'react'
import { ReactTitle } from 'react-meta-tags'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class index extends Component {
    render() {
        return (
            <div className="container">
                <ReactTitle title='Admin | Dashboard' />
                <div className="row">
                    <div className="col-12">
                        <h4>admin dashboard</h4>
                        <p>{this.props.user.id}</p>
                        <p>{this.props.user.name}</p>
                        <p>{this.props.user.email}</p>
                        <p>{this.props.user.token}</p>
                    </div>
                </div>  
            </div>
        )
    }
}


index.propTypes = {
    user: PropTypes.object.isRequired
}
  
const mapStateToProps = state => ({
    user: state.minda.user
})
  
export default connect(mapStateToProps, {})(index)
