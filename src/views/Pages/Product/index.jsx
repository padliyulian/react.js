import React, { Component } from 'react'
import { ReactTitle } from 'react-meta-tags'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'
import { Button, Modal  } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import $ from 'jquery'
import SweetAlert from 'react-bootstrap-sweetalert';
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
const styleNone = { display: 'none' }


class index extends Component {
    state = {
        alert: null,
        error: '',
        products: [],
        modal: false,
        newProduct: {
            code: '',
            name: '',
            description: '',
            price: ''
        },
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
        if ($('.js-modal__btn-save').text() === 'Save') {
            console.log('save')
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
                    console.log(err)
                }
            )
        } else {
            console.log('update')
            let id = parseInt($('.js-id__update').val())
            axios.patch(
                `http://devsrv.mindaperdana.com/test-api/public/api/product/${id}`, values,
                {
                    headers: {
                        "Accept" : "application/json",
                        "Authorization": `Bearer ${this.props.user.token}` 
                    }
                }
            )
            .then(
                () => {
                    let products = this.state.products.filter(product => product.id !== id)
                    this.setState({products: products})
                    values.id = id
                    this.setState(prevState => ({
                        products: [...prevState.products, values]
                    }))
                },
                (err) => {
                    console.log(err)
                }
            )
            console.log($('.js-id__update').val())
        }
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

    handleShow = (id, e) => {
        e.preventDefault()
        let product = this.state.products.filter(product => product.id === id)  
        this.handleModalShow()
        setTimeout(function() {
            $('.js-modal__body_add').hide()
            $('.js-modal__btn-save').hide()
            $('.js-modal__title').text('Detail Product')
            $('.js-modal__body_show').show()
            $('.js-modal__body_show').html(`
                <p>ID : ${product[0].id}</p>
                <p>Code : ${product[0].code}</p>
                <p>Name : ${product[0].name}</p>
                <p>Description : ${product[0].description}</p>
                <p>Price : ${product[0].price}</p>
            `)
        }, 300)
    }

    handleEdit = (id, e) => {
        e.preventDefault()
        let product = this.state.products.filter(product => product.id === id)
        this.setState({
            newProduct: {
                code: product[0].code,
                name: product[0].name,
                description: product[0].description,
                price: product[0].price
            }
        })
        this.handleModalShow()
        setTimeout(function() {
            $('.js-modal__btn-save').text('Update')
            $('.js-modal__title').text('Edit Product')
            $('.js-modal__body_add').append(`<input value="${product[0].id}" type="hidden" class="js-id__update">`)
        }, 300)
    }

    handleDelete = (id, e) => {
        e.preventDefault()
        const getAlert = (id) => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Yes, delete it!"
                confirmBtnBsStyle="danger"
                title="Are you sure?"
                onConfirm={() => this.deleteProduct(id)}
                onCancel={() => this.hideAlert()}
                focusCancelBtn
            >
                You won't be able to revert this!
            </SweetAlert>
        )

        this.setState({
            alert: getAlert(id)
        })
    }

    deleteProduct = (id) => {
        console.log(id)
        axios.delete(
            `http://devsrv.mindaperdana.com/test-api/public/api/product/${id}`,
            {
                headers: {
                    "Accept" : "application/json",
                    "Authorization": `Bearer ${this.props.user.token}` 
                }
            }
        )
        .then(
            () => {
                let list = this.state.products.filter(product => product.id !== id)
                this.setState({products: list})
            },
            (err) => {
                console.log(err)
            }
        )

        this.hideAlert()
    }

    hideAlert = () => {
        this.setState({
            alert: null
        })
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
                    <a href="/" onClick={(e) => this.handleShow(product.id, e)}><i className="fas fa-eye"></i></a> <a href="/" onClick={(e) => this.handleEdit(product.id, e)} className="text-warning"><i className="fas fa-edit"></i></a> <a href="/" onClick={(e) => this.handleDelete(product.id, e)} className="text-danger"><i className="fas fa-trash"></i></a>
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
                                                    <h3 className="card-title">Product</h3>
                                                    <div className="card-tools">
                                                        <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                                        <i className="fas fa-minus"></i></button>
                                                        <button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                                                        <i className="fas fa-times"></i></button>
                                                    </div>
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>  
                    </div>

                    {this.state.alert}
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
                                <Modal.Title><span className="js-modal__title">Add Product</span></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                
                                <div className="js-modal__body_show" style={styleNone}>
                                </div>
                                <div className="js-modal__body_add">         
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
                                </div>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleModalClose}>
                                    Close
                                </Button>
                                <Button className="js-modal__btn-save" type="submit" variant="primary">
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
