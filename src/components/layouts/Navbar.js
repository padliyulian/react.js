import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      links: [
        {
          id: 1, text: "Home", url: "/"
        },
        {
          id: 2, text: "About", url: "/about"
        },
        {
          id: 3, text: "Portfolio", url: "/portfolio"
        },
        {
          id: 4, text: "Blog", url: "/blog"
        }
      ]
    }
  }

  componentDidMount() {
    document.querySelectorAll(".navbar ul li a").forEach(el => {
      el.addEventListener("click", (ev) => {
        document.querySelectorAll(".navbar ul li").forEach(el => {
          el.classList.remove("active")
        })
        ev.target.parentElement.classList.add("active")
      })
    })
  }

  render() {
    const link = this.state.links.map(link => {
      return (
        <li key={link.id}>
          <Link to={link.url}>{link.text}</Link>
        </li>
      )
    })

    const moblink = this.state.links.map(link => {
      return (
        <li key={link.id}>
          <a href={link.url}>{link.text}</a>
        </li>
      )
    })

    return(
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
          {moblink}
        </ul>
      </div>
    )
  }
} 

export default Navbar