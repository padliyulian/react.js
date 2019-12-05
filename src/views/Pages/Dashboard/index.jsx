import React, { Component } from 'react'
import { ReactTitle } from 'react-meta-tags'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    ContentHeader,
    ControlSidebar,
    Dashboard,
    Footer,
    Navbar,
    Sidebar
} from '../../Layouts'

class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Sidebar />
                    <div className="content-wrapper">
                        <div className="content">

                            <div>
                                <ReactTitle title='Admin | Dashboard' />
                                {/* <div className="row">
                                    <div className="col-12">
                                        <h4>admin dashboard</h4>
                                        <p>{this.props.user.id}</p>
                                        <p>{this.props.user.name}</p>
                                        <p>{this.props.user.email}</p>
                                        <p>{this.props.user.token}</p>
                                    </div>
                                </div>   */}
                                <ContentHeader />
                                <Dashboard />
                            </div>

                        </div>  
                    </div>
                <ControlSidebar />
                <Footer />  
            </React.Fragment>              
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
