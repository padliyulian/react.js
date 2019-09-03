import React, { Component } from "react"
import NavComponent from "./NavComponent"

class NavContainer extends Component {
  state = {
    links: [
      {
        id: 1, text: "Home", url: "/", icon: "home"
      },
      {
        id: 2, text: "Add", url: "/add", icon: "add"
      }
    ]
  }

  componentDidMount = () => {
    document.querySelectorAll(".js-navbar__item").forEach(el => {
      el.addEventListener("click", (ev) => {
        document.querySelectorAll(".js-navbar__box").forEach(el => {
          el.classList.remove("active")
        })
        ev.target.parentElement.classList.add("active")
      })
    })
  }

  render() {
    return <NavComponent links={this.state.links} />
  }
} 

export default NavContainer