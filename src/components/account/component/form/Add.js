import React from "react"
import Info from "../message/Info"

const Add = (props) => {

  const { info, data, countrys, handleSubmit, handleChange, error, handleValidate } = props
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

            <form onSubmit={handleSubmit}>
              <ul>
                <li className="input-field">
                  <i className="material-icons prefix">person</i>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    onBlur={handleValidate}
                  />
                  <label htmlFor="name">Name</label>
                  {error.name && <p style={style}>Name is required</p>}
                </li>
                <li className="input-field">
                  <i className="material-icons prefix">fingerprint</i>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={data.number}
                    onChange={handleChange}
                    onBlur={handleValidate}
                  />
                  <label htmlFor="number">Number</label>
                  {error.number && <p style={style}>Number is required</p>}
                </li>
                <li className="input-field">
                  <i className="material-icons prefix">vpn_key</i>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    value={data.code}
                    onChange={handleChange}
                    onBlur={handleValidate}
                  />
                  <label htmlFor="code">Code</label>
                  {error.code && <p style={style}>Code is required</p>}
                </li>
                <li className="input-field">
                  <i className="material-icons prefix">location_on</i>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    onBlur={handleValidate}
                  />
                  <label htmlFor="address">Address</label>
                  {error.address && <p style={style}>Address is required</p>}
                </li>
                <li className="input-field">
                  <i className="material-icons prefix">location_city</i>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={data.city}
                    onChange={handleChange}
                    onBlur={handleValidate}
                  />
                  <label htmlFor="city">City</label>
                  {error.city && <p style={style}>City is required</p>}
                </li>
                <li>
                  <label htmlFor="country">Country</label>
                  <div className="input-field">
                    <select
                      name="country"
                      id="country"
                      className="browser-default"
                      value={data.country}
                      onChange={handleChange}
                      onBlur={handleValidate}
                    >
                      <option value="" disabled>--select country--</option>
                      {listCountry}
                    </select>
                  </div>
                  {error.county && <p style={style}>County is required</p>}
                </li>
                <li>
                  <label htmlFor="currency">Currency</label>
                  <div className="input-field">
                    <select
                      name="currency"
                      id="currency"
                      className="browser-default"
                      value={data.currency}
                      onChange={handleChange}
                      onBlur={handleValidate}
                    >
                      <option value="" disabled>--select curency--</option>
                      {listCurrency}
                    </select>
                  </div>
                  {error.currency && <p style={style}>Currency is required</p>}
                </li>
                <li className="input-field">
                  <fieldset>
                  <legend>Account Type</legend>  
                    <p>
                      <label>
                        <input
                          className="with-gap"
                          name="type"
                          value="individual"
                          type="radio"
                          checked={data.type === "individual"}
                          onChange={handleChange}
                        />
                        <span>Individual</span>
                      </label>
                    </p>
                    <p>
                    <label>
                      <input
                        className="with-gap"
                        name="type"
                        value="company"
                        type="radio"
                        checked={data.type === "company"}
                        onChange={handleChange}
                      />
                      <span>Company</span>
                    </label>
                  </p>
                  </fieldset>
                  {error.type && <p style={style}>Type is required</p>}
                </li>
                {
                  data.type === "" ? "" : (
                    data.type === "company" ? (
                      <li className="input-field">
                        <i className="material-icons prefix">build</i>
                        <input
                          type="text"
                          id="cname"
                          name="cname"
                          value={data.cname}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="cname">Company Name</label>
                      </li>
                    ) : (
                        <li>
                          <div className="row">
                            <div className="col s6 input-field">
                              <i className="material-icons prefix">person</i>
                              <input
                                type="text"
                                id="fname"
                                name="fname"
                                value={data.fname}
                                onChange={handleChange}
                                required
                              />
                              <label htmlFor="fname">Firts Name</label>
                            </div>
                            <div className="col s6 input-field">
                              <i className="material-icons prefix">person</i>
                              <input
                                type="text"
                                id="lname"
                                name="lname"
                                value={data.lname}
                                onChange={handleChange}
                                required
                              />
                              <label htmlFor="lname">Last Name</label>
                            </div>
                          </div>
                        </li>
                      )
                  )
                }
                <li>
                  <button
                    className="btn waves-effect red lighten-2"
                  >
                    Add
                  </button>
                </li>
              </ul>
            </form>
            <div className="card-panel">
              <h6 className="center-align">Check Your Input Before Add</h6>
              <p>Account Name : {data.name}</p>
              <p>Account Number : {data.number}</p>
              <p>Code : {data.code}</p>
              <p>Address : {data.address}</p>
              <p>City : {data.city}</p>
              <p>Country : {data.country}</p>
              <p>Currency : {data.currency}</p>
              <p>Account Type : {data.type}</p>
              {
                data.type === "individual" ? (
                  <p>Full Name : {data.fname} {data.lname}</p>
                ):(
                  <p>Company Name : {data.cname}</p>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default Add