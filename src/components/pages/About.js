import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      number: "",
      code: "",
      address: "",
      city: "",
      country: "",
      currency: "",
      type: "",
      cname: "",
      fname: "",
      lname: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div>
              <form>
                <ul>
                  <li className="input-field">
                    <i className="material-icons prefix">person</i>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
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
                      value={this.state.number}
                      onChange={this.handleChange}
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
                      value={this.state.code}
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="code">Code</label>
                  </li>
                  <li className="input-field">
                    <i className="material-icons prefix">address</i>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={this.state.address}
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="address">Address</label>
                  </li>
                  <li className="input-field">
                    <i className="material-icons prefix">person</i>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={this.state.city}
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="city">City</label>
                  </li>
                  <li className="input-field">
                    <p>
                      <label>
                        <input
                          className="with-gap"
                          name="type"
                          value="individual"
                          type="radio"
                          checked={this.state.type === "individual"}
                          onChange={this.handleChange}
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
                          checked={this.state.type === "company"}
                          onChange={this.handleChange}
                        />
                        <span>Company</span>
                      </label>
                    </p>
                  </li>
                  {
                    this.state.type === "" ? "" : (
                      this.state.type === "company" ? (
                        <li className="input-field">
                          <i className="material-icons prefix">address</i>
                          <input
                            type="text"
                            id="cname"
                            name="cname"
                            value={this.state.cname}
                            onChange={this.handleChange}
                            required
                          />
                          <label htmlFor="cname">Company Name</label>
                        </li>
                      ) : (
                          <li>
                            <div className="row">
                              <div className="col s6 input-field">
                                <i className="material-icons prefix">address</i>
                                <input
                                  type="text"
                                  id="fname"
                                  name="fname"
                                  value={this.state.fname}
                                  onChange={this.handleChange}
                                  required
                                />
                                <label htmlFor="fname">Firts Name</label>
                              </div>  
                              <div className="col s6 input-field">
                                <i className="material-icons prefix">address</i>
                                <input
                                  type="text"
                                  id="lname"
                                  name="lname"
                                  value={this.state.lname}
                                  onChange={this.handleChange}
                                  required
                                />
                                <label htmlFor="lname">Last Name</label>
                              </div>  
                            </div>  
                          </li>
                      )
                    )
                  }
                </ul>
              </form>
              <div>
                <p>{this.state.name}</p>
                <p>{this.state.number}</p>
                <p>{this.state.code}</p>
                <p>{this.state.address}</p>
                <p>{this.state.city}</p>
                <p>{this.state.country}</p>
                <p>{this.state.currency}</p>
                <p>{this.state.type}</p>
                {
                  this.state.type === "company" ? (
                    <p>{this.state.cname}</p>
                  ):(
                    <p>{this.state.fname}-{this.state.lname}</p>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;