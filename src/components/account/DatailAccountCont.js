import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { detAccount } from "../../actions/"
import DetailAccountComp from "./DetailAccountComp"

class DetailAccountCont extends Component {

	componentWillMount = () => {
		this.props.detAccount(this.props.match.params.id)
	}

	handleClick = () => {
		this.props.history.push("/")
	}

	render() {
		const { account } = this.props
		return <DetailAccountComp account={account} handleClick={this.handleClick} />
	}
}

DetailAccountCont.propTypes = {
	detAccount: PropTypes.func.isRequired,
	account: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	account: state.accounts.account
})

export default connect(mapStateToProps, { detAccount })(DetailAccountCont)