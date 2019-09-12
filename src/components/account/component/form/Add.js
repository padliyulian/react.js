import React from "react"
import Info from "../message/Info"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const Add = (props) => {

  const InputSchema = Yup.object().shape({
    name: Yup.string().required(),
    number: Yup.string().required(),
    code: Yup.string().required(),
    address: Yup.string().required(),
    city: Yup.string().required(),
    country: Yup.string().required(),
    currency: Yup.string().required(),
    type: Yup.string().required(),
    cname: Yup.string(),
    fname: Yup.string(),
    lname: Yup.string(),
  });
  const { info, countrys, handleSubmit } = props
  const style = { color: 'red' }
  const listCountry = countrys.map(country => {
    return (
      <option
        key={country.numericCode}
        value={country.name}
      >
        {country.name}
      </option>
    )
  })
  const listCurrency = countrys.map(country => {
    return (
      <option
        key={country.numericCode}
        value={country.currencies[0].code}
      >
        {country.currencies[0].code}
      </option>
    )
  })

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div>
            { info === true && <Info info="Add" /> }

            <Formik
              initialValues={{
                name: '',
                number: '',
                code: '',
                address: '',
                city: '',
                country: '',
                currency: '',
                type: '',
                cname: '',
                fname: '',
                lname: '',
              }}
              validationSchema={InputSchema}
              onSubmit={
                (values) => {
                  handleSubmit(values)
                }
              }
            > 

            {(InputSchema) => (
            <Form>
              <ul>
                <li className="input-field">
                  <i className="material-icons prefix">person</i>
                  <Field type="text" name="name" />
                  <ErrorMessage style={style} name="name" component="div" />
                  <label htmlFor="name">Name</label>
                </li>
                <li className="input-field">
                  <i className="material-icons prefix">fingerprint</i>
                  <Field type="text" name="number" />
                  <ErrorMessage style={style} name="number" component="div" />
                  <label htmlFor="number">Number</label>
                </li>
                <li className="input-field">
                  <i className="material-icons prefix">vpn_key</i>
                  <Field type="text" name="code" />
                  <ErrorMessage style={style} name="code" component="div" />
                  <label htmlFor="code">Code</label>
                </li>
                <li className="input-field">
                  <i className="material-icons prefix">location_on</i>
                  <Field type="text" name="address" />
                  <ErrorMessage style={style} name="address" component="div" />
                  <label htmlFor="address">Address</label>
                </li>
                <li className="input-field">
                  <i className="material-icons prefix">location_city</i>
                  <Field type="text" name="city" />
                  <ErrorMessage style={style} name="city" component="div" />
                  <label htmlFor="city">City</label>
                </li>
                <li>
                  <label htmlFor="country">Country</label>
                  <div className="input-field">
                    <Field className="browser-default" name="country" component="select">
                      <option value="" disabled>--select country--</option>
                      {listCountry}
                    </Field>
                    <ErrorMessage style={style} name="country" component="div" />
                  </div>
                </li>
                <li>
                  <label htmlFor="currency">Currency</label>
                  <div className="input-field">
                    <Field className="browser-default" name="currency" component="select">
                      <option value="" disabled>--select currency--</option>
                      {listCurrency}
                    </Field>
                    <ErrorMessage style={style} name="currency" component="div" />
                  </div>
                </li>
                <li className="input-field">
                  <fieldset>
                  <legend>Account Type</legend>  
                    <p>
                      <label>
                        <Field className="with-gap" type="radio" name="type" value="individual" checked={InputSchema.values.type === "individual"} />
                        <span>Individual</span>
                      </label>
                    </p>
                    <p>
                    <label>
                      <Field className="with-gap" type="radio" name="type" value="company" checked={InputSchema.values.type === "company"} />
                      <span>Company</span>
                    </label>
                  </p>
                  </fieldset>
                  <ErrorMessage style={style} name="type" component="div" />
                </li>
                {
                  InputSchema.values.type === "" ? "" : (
                    InputSchema.values.type === "company" ? (
                      <li className="input-field">
                        <i className="material-icons prefix">build</i>
                        <Field type="text" name="cname" />
                        <ErrorMessage style={style} name="cname" component="div" />
                        <label htmlFor="cname">Company Name</label>
                      </li>
                    ) : (
                        <li>
                          <div className="row">
                            <div className="col s6 input-field">
                              <i className="material-icons prefix">person</i>
                              <Field type="text" name="fname" />
                              <ErrorMessage style={style} name="fname" component="div" />
                              <label htmlFor="fname">Firts Name</label>
                            </div>
                            <div className="col s6 input-field">
                              <i className="material-icons prefix">person</i>
                              <Field type="text" name="lname" />
                              <ErrorMessage style={style} name="lname" component="div" />
                              <label htmlFor="lname">Last Name</label>
                            </div>
                          </div>
                        </li>
                      )
                  )
                }
                <li>
                  <button type="submit" className="btn waves-effect red lighten-2">Add</button>
                </li>
              </ul>
            

            <div className="card-panel">
              <h6 className="center-align">Check Your Input Before Add</h6>
              <p>Account Name : {InputSchema.values.name}</p>
              <p>Account Number : {InputSchema.values.number}</p>
              <p>Code : {InputSchema.values.code}</p>
              <p>Address : {InputSchema.values.address}</p>
              <p>City : {InputSchema.values.city}</p>
              <p>Country : {InputSchema.values.country}</p>
              <p>Currency : {InputSchema.values.currency}</p>
              <p>Account Type : {InputSchema.values.type}</p>
              {
                InputSchema.values.type === "individual" ? (
                  <p>Full Name : {InputSchema.values.fname} {InputSchema.values.lname}</p>
                ):(
                  <p>Company Name : {InputSchema.values.cname}</p>
                )
              }
            </div>
            </Form>
            )}
            </Formik> 
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default Add