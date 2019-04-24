import React from 'react'

const AddAccountComp = (props) => {
  const { info, data, countrys, handleSubmit, handleChange } = props

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
    <div>
      {
        info === true ? (
          <div className="card-panel red lighten-2">
            <span className="card-content white-text">
              The data success add ...
            </span>
          </div>
          ) : ""
      }
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
              required
            />
            <label htmlFor="name">Name</label>
          </li>
          <li className="input-field">
            <i className="material-icons prefix">fingerprint</i>
            <input
              type="text"
              id="number"
              name="number"
              value={data.number}
              onChange={handleChange}
              required
            />
            <label htmlFor="number">Number</label>
          </li>
          <li className="input-field">
            <i className="material-icons prefix">vpn_key</i>
            <input
              type="text"
              id="code"
              name="code"
              value={data.code}
              onChange={handleChange}
              required
            />
            <label htmlFor="code">Code</label>
          </li>
          <li className="input-field">
            <i className="material-icons prefix">location_on</i>
            <input
              type="text"
              id="address"
              name="address"
              value={data.address}
              onChange={handleChange}
              required
            />
            <label htmlFor="address">Address</label>
          </li>
          <li className="input-field">
            <i className="material-icons prefix">location_city</i>
            <input
              type="text"
              id="city"
              name="city"
              value={data.city}
              onChange={handleChange}
              required
            />
            <label htmlFor="city">City</label>
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
              >
                <option value="" disabled>--select country--</option>
                {listCountry}
              </select>
            </div>
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
              >
                <option value="" disabled>--select curency--</option>
                {listCurrency}
              </select>
            </div>
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
        <p>
          Account Name : {data.name}
        </p>
        <p>
          Account Number : {data.number}
        </p>
        <p>
          Code : {data.code}
        </p>
        <p>
          Address : {data.address}
        </p>
        <p>
          City : {data.city}
        </p>
        <p>
          Country : {data.country}
        </p>
        <p>
          Currency : {data.currency}
        </p>
        <p>
          Account Type : {data.type}
        </p>
        {
          data.type === "individual" ? (
            <p>Full Name : {data.fname} {data.lname}</p>
          ):(
            <p>Company Name : {data.cname}</p>
          )
        }
      </div>
    </div>
  )
}

export default AddAccountComp