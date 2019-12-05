import React, { Component } from 'react'
import { ReactTitle } from 'react-meta-tags'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'
import { Button, Modal  } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import $ from 'jquery'
import {
    ControlSidebar,
    Footer,
    Navbar,
    Sidebar
} from '../../Layouts'

const InputSchema = Yup.object().shape({
    code: Yup.string().required(),
    name: Yup.string().required(),
    description: Yup.string().required(),
    price: Yup.string().required()
})

const style = { color: 'red' }


class index extends Component {
    state = {
        error: '',
        products: [],
        modal: false,
        newProduct: {
            code: '',
            name: '',
            description: '',
            price: ''
        }
    }

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
                this.setState({products: res.data})
            },
            (err) => {
                console.log(err.data)
            }
        )
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState(prevState => {
            return {
                newProduct: {
                    ...prevState.newProduct,
                    [name]: value
                }
            }
        })
    }

    handleSubmit = (values) => {
        console.log(values)
        axios.post(
            'http://devsrv.mindaperdana.com/test-api/public/api/product', values,
            {
                headers: {
                    "Accept" : "application/json",
                    "Authorization": `Bearer ${this.props.user.token}` 
                }
            }
        )
        .then(
            (res) => {
                this.setState(prevState => ({
                    products: [...prevState.products, res.data]
                }))
            },
            (err) => {
                console.log(err.response.data.message)
            }
        )
        this.clearState()
        this.handleModalClose()
    }
    
    clearState = () => {
        this.setState({
            error: '',
            newProduct: {
                code: '',
                name: '',
                description: '',
                price: ''
            }
        })
    }

    handleShow = (id) => {

    }

    handleEdit = (id) => {

    }

    handleDelete = (id) => {

    }

    handleModalShow = () => {
        this.setState({modal: true})
    }

    handleModalClose = () => {
        this.clearState()
        this.setState({modal: false})
    }

    render() {
        let productList = []
        if (this.state.products.length) {
            productList = this.state.products.map((product, index) => {
              return (
                <tr key={product.id}>
                  <td className="text-center">
                    {index + 1}
                  </td>
                  <td>{product.code}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>
                    <a href="/" onClick={this.handleShow(product.id)}><i className="fas fa-eye"></i></a> <a href="/" onClick={this.handleEdit(product.id)} className="text-warning"><i className="fas fa-edit"></i></a> <a href="/" onClick={this.handleDelete(product.id)} className="text-danger"><i className="fas fa-trash"></i></a>
                  </td>
                </tr>
              )
            })
        } else {
            productList = (
              <tr>
                <td colSpan="9" className="center-align">
                  No data to view...
                </td>
              </tr>
            )
        }

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
                                                <div className="card-header">
                                                    header
                                                </div>
                                                <div className="card-body table-responsive">
                                                    <div className="col-12 d-flex justify-content-between px-md-0">
                                                        <h4>List Of Product</h4>
                                                        <button onClick={this.handleModalShow} className="btn btn-info">Add</button>
                                                    </div>
                                                    <table id="client-table" className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th>No</th>
                                                                <th>Code</th>
                                                                <th>Name</th>
                                                                <th>Description</th>
                                                                <th>Price</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {productList}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="card-footer">
                                                    foo
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>  
                    </div>

                    <Modal show={this.state.modal} onHide={this.handleModalClose}>
                        <Formik
                            enableReinitialize
                            initialValues={this.state.newProduct}
                            validationSchema={InputSchema}
                            onSubmit={
                                (values) => {
                                    this.handleSubmit(values)
                                }
                            }
                        >
                            {(InputSchema) => (<Form>
                                <Modal.Header closeButton>
                                <Modal.Title>Add Product</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                          
                                    <div className="form-group">
                                        <label htmlFor="code">Code</label>
                                        <Field className="form-control" value={InputSchema.values.code} onChange={this.handleChange} type="text" name="code" />
                                        <ErrorMessage style={style} name="code" component="div"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <Field className="form-control" value={InputSchema.values.name} onChange={this.handleChange} type="text" name="name" />
                                        <ErrorMessage style={style} name="name" component="div"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <Field className="form-control" value={InputSchema.values.description} onChange={this.handleChange} type="text" name="description" />
                                        <ErrorMessage style={style} name="description" component="div"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Price</label>
                                        <Field className="form-control" value={InputSchema.values.price} onChange={this.handleChange} type="text" name="price" />
                                        <ErrorMessage style={style} name="price" component="div"/>
                                    </div>
                                
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleModalClose}>
                                    Close
                                </Button>
                                <Button type="submit" variant="primary">
                                    Save
                                </Button>
                                </Modal.Footer>
                            </Form>)}
                        </Formik>
                    </Modal>
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
