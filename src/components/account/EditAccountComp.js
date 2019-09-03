import React from "react"
import Info from "./Info"

const EditAccountComp = (props) => {

  const { info, data, countrys, handleChange, handleSubmit } = props
  const listCountry = countrys.map(country => {
    return <option key={country.numericCode} value={country.name}>{country.name}</option>
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
      { info === true && <Info info="Update" /> }
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div>
            <form onSubmit={handleSubmit}>
              <ul>
                <li>
                  <label>Name</label>
                  <div className="input-field">
                    <i className="material-icons prefix">person</i>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      defaultValue={data.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </li>
                <li>
                  <label>Number</label>
                  <div className="input-field">
                    <i className="material-icons prefix">fingerprint</i>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      defaultValue={data.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </li>
                <li>
                  <label>Code</label>
                  <div className="input-field">
                    <i className="material-icons prefix">vpn_key</i>
                    <input
                      type="text"
                      id="code"
                      name="code"
                      defaultValue={data.code}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </li>
                <li>
                  <label>Address</label>
                  <div className="input-field">
                    <i className="material-icons prefix">location_on</i>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      defaultValue={data.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </li>
                <li>
                  <label>City</label>
                  <div className="input-field">
                    <i className="material-icons prefix">location_city</i>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      defaultValue={data.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
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
                      <option value="" disabled>--select currency--</option>
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
                  data.type === "company" ? (
                    <li>
                      <label>Company Name</label>
                      <div className="input-field">
                        <i className="material-icons prefix">build</i>
                        <input
                          type="text"
                          id="cname"
                          name="cname"
                          defaultValue={data.cname}
                          onChange={handleChange}
                          required
                        />
                      </div>
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
                              defaultValue={data.fname}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="col s6 input-field">
                            <i className="material-icons prefix">person</i>
                            <input
                              type="text"
                              id="lname"
                              name="lname"
                              defaultValue={data.lname}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </li>
                    )
                }
                <li>
                  <button
                    className="btn waves-effect red lighten-2 right"
                  >
                    Update
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}

export default EditAccountComp