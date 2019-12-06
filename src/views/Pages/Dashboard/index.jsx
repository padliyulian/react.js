import React, { Component } from 'react'
import { ReactTitle } from 'react-meta-tags'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'
import $ from 'jquery'
import {
    ControlSidebar,
    Dashboard,
    Footer,
    Navbar,
    Sidebar
} from '../../Layouts'

class index extends Component {
    state = {
        products: null
    }

    componentDidMount = () => {
        axios.get(
            'http://devsrv.mindaperdana.com/test-api/public/api/dashboard',
            {
                headers: {
                    "Accept" : "application/json",
                    "Authorization": `Bearer ${this.props.user.token}` 
                }
            }
        )
        .then(
            (res) => {
                this.setState({products: res.data.products})
                console.log(this.state.products)
                setTimeout(() => $('.js-minda__jumproduk').text(this.state.products), 300)
            },
            (err) => {
                console.log(err.data)
            }
        )
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Sidebar />
                    <div className="content-wrapper">
                        <div className="content pt-4">

                            <ReactTitle title='Admin | Dashboard' />
                            <Dashboard />

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
