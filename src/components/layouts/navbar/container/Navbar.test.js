import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Navbar from "./Navbar"
import NavbarList from "../component/NavbarList"

configure({ adapter: new Adapter() })

describe("<Navbar />", () => {
  
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Navbar />)
  })

  it("should render <NavbarList />", () => {
    expect(wrapper.find(NavbarList)).toHaveLength(1)
  })

})