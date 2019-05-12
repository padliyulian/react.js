import React from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

export default function ContentHeader(props) {
  const {header} = props
  return (
    <div>
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">{header}</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                { header ? <li className="breadcrumb-item active">{header}</li> : null }
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* /.content-header */}
    </div>
  )
}

ContentHeader.propTypes = {
  header: PropTypes.string
};
