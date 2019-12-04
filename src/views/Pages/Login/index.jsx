import React, { Component } from 'react'
import { ReactTitle } from 'react-meta-tags'
import axios from 'axios'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../../../actions'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"

const InputSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
})

const style = { color: 'red' }

class index extends Component {
    state = {
        login: {
            email: '',
            password: '',
        },
        error: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState(prevState => {
            return {
                login: {
                    ...prevState.login,
                    [name]: value
                }
            }
        })
    }

    handleSubmit = (values) => {
        console.log(values)
        axios.post('http://devsrv.mindaperdana.com/test-api/public/api/user/login', values)
            .then(
                (res) => this.props.history.push('/dashboard'),
                err => this.setState({error: err.response.data.message})
            )
        this.clearState()
    }
    
    clearState = () => {
        this.setState({
            login: {
                email: '',
                password: '',
            },
            error: ''
        })
    }

    handleReset = () => {
        this.clearState()
    }

    render() {
        return (
            <div className="container">
                <ReactTitle title='Mindaperdana | Login' />
                <div className="row">
                    <div className="col-12">
                        <div className="minda-login">
                            {this.state.error ? (<p className="text-danger text-center">{this.state.error}</p>) : null}
                            <Formik
                                enableReinitialize
                                initialValues={this.state.login}
                                validationSchema={InputSchema}
                                onSubmit={
                                    (values) => {
                                        this.handleSubmit(values)
                                    }
                                }
                            > 
                                {(InputSchema) => (<Form className="minda-login__form">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field className="form-control" value={InputSchema.values.email} onChange={this.handleChange} type="text" name="email" />
                                        <ErrorMessage style={style} name="email" component="div"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Field className="form-control" value={InputSchema.values.password} onChange={this.handleChange} type="password" name="password" />
                                        <ErrorMessage style={style} name="password" component="div"/>
                                    </div>
                                    <button type="submit" className="btn btn-outline-primary">Login</button> <button onClick={this.handleReset} type="reset" className="btn btn-outline-secondary">Reset</button>
                                </Form>)}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// index.propTypes = {
//     login: PropTypes.func.isRequired
// }

// index.contextTypes = {
//     router: PropTypes.object.isRequired
// }

export default connect(null, { login })(index)

