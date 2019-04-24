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
      // {
      //   id: 3, text: "Portfolio", url: "/portfolio"
      // },
      // {
      //   id: 4, text: "Blog", url: "/blog"
      // }
    ]
  }

  componentDidMount = () => {
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
    return (
      <NavComponent links={this.state.links} />
    )
  }
} 

export default NavContainer