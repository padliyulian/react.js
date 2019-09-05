import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import NavContainer from "./NavContainer"
import NavComponent from "./NavComponent"

configure({ adapter: new Adapter() })

describe("<NavContainer />", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<NavContainer />)
  })

  it("should render <NavComponent />", () => {
    expect(wrapper.find(NavComponent)).toHaveLength(1)
  })

  it("should render <li>", () => {
    wrapper = shallow(<NavComponent />)
    expect(wrapper.contains(
      <span>Home</span>
    )).toEqual(true)
  })
})