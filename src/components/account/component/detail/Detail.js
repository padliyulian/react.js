import React from "react"

const Detail = (props) => {

  const { account, handleClick } = props
  const style = { fontWeight: "bold" }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card">
            <div className="card-content">
              <span className="card-title center-align">Account Detail</span>
              <div>
                <h6>Holder Name</h6>
                <p style={style}>{account.name}</p>
              </div>
              <div>
                <h6>Account Number</h6>
                <p style={style}>{account.number}</p>
              </div>
              <div>
                <h6>Swift Code</h6>
                <p style={style}>{account.code}</p>
              </div>
              <div>
                <h6>Address</h6>
                <p style={style}>{account.address}</p>
              </div>
              <div>
                <h6>City</h6>
                <p style={style}>{account.city}</p>
              </div>
              <div>
                <h6>Country</h6>
                <p style={style}>{account.country}</p>
              </div>
              <div>
                <h6>Currency</h6>
                <p style={style}>{account.currency}</p>
              </div>
              <div>
                <h6>Type</h6>
                <p style={style}>{account.type}</p>
              </div>
              {account.type === "company" ? (
                <div>
                  <h6>Company Name</h6>
                  <p style={style}>{account.cname}</p>
                </div>
              ) : (
                  <div>
                    <div>
                      <h6>First Name</h6>
                      <p style={style}>{account.fname}</p>
                    </div>
                    <div>
                      <h6>Last Name</h6>
                      <p style={style}>{account.lname}</p>
                    </div>
                  </div>
                )}
            </div>
            <div className="card-action">
              <button
                className="btn btn-small waves-effect red lighten-2"
                onClick={handleClick}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Detail