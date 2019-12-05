import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'js/script.js'
    script.async = true
    document.body.appendChild(script)
  }

  render() {
    return (
      <div>
        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <Link to="/" className="brand-link">
            <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
          </Link>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
              </div>
              <div className="info">
                <a href="!#" className="d-block">Admin</a>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library */}
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link julian-link">
                    <i className="nav-icon fa fa-dashboard" />
                    <p>
                      Dashboard
                  </p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <a href="!#" className="nav-link">
                    <i className="nav-icon fa fa-cogs" />
                    <p>
                      Management
                    <i className="right fa fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/product" className="nav-link julian-link">
                        <i className="fa fa-users nav-icon" />
                        <p>Product</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/employees" className="nav-link julian-link">
                        <i className="fa fa-users nav-icon" />
                        <p>Employees</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="!#" className="nav-link julian-link">
                    <i className="nav-icon fa fa-power-off" />
                    <p>
                      logout
                  </p>
                  </a>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    )
  }
}

