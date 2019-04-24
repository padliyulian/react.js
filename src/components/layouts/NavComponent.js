import React from "react"
import { Link } from "react-router-dom"
import "./NavComponent.css"

const NavComponent = (props) => {
  const { links } = props
  const link = links.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url}>
          {link.text}
        </Link>
      </li>
    )
  })
  const moblink = links.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url} className="sidenav-close">
          <i className="material-icons">{link.icon}</i>
          <span>{link.text}</span>
        </Link>
      </li>
    )
  })

  return (
    <div className="navbar">
      <div className="navbar-fixed">
        <nav>
          <div className="container">
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo">App</a>
              <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                {link}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-demo">
        <li><div className="user-view">App</div></li>
        <li><div className="divider"></div></li>
        {moblink}
      </ul>
    </div>
  )
}

export default NavComponent