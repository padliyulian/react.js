import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addAccount, getCountrys } from "../../../../actions"
import AddAccount from "../../component/form/Add"

export class Add extends Component {
  state = {
    info: false,
  }

  componentWillMount() {
    this.props.getCountrys();
  }

  handleSubmit = (values) => {
    this.props.addAccount(values)
    this.setState({info: true})
    setTimeout(() => {
      this.clearState()
      this.props.back.push("/")
    }, 5000)
  }

  clearState = () => {
    this.setState({info: false})
  }

  render() {
    return (
      <AddAccount
        info={this.state.info}
        countrys={this.props.countrys}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

Add.propTypes = {
  addAccount: PropTypes.func.isRequired,
  getCountrys: PropTypes.func.isRequired,
  countrys: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  countrys: state.accounts.countrys
})

export default connect(mapStateToProps, { addAccount, getCountrys })(Add)