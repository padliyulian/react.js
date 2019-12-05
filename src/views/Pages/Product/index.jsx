import React, { Component } from 'react'
import { ReactTitle } from 'react-meta-tags'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'
import {
    ControlSidebar,
    Footer,
    Navbar,
    Sidebar
} from '../../Layouts'

class index extends Component {
    componentDidMount = () => {
        axios.get(
            'http://devsrv.mindaperdana.com/test-api/public/api/product',
            {
                headers: {
                    "Accept" : "application/json",
                    "Authorization": `Bearer ${this.props.user.token}` 
                }
            }
        )
        .then(
            (res) => {
                console.log(res.data)
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

                            <div>
                                <ReactTitle title='Dashboard | Product' />
                                <div className="container-fluid">
                                    <div className="row">
                                    <div className="col">
                                        <div className="card">
                                        <div className="card-body">
                                            Product
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
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
