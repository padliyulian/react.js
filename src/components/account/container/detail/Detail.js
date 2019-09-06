import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { detAccount } from "../../../../actions/"
import DetailAccount from "../../component/detail/Detail"

export class Detail extends Component {

	componentWillMount = () => {
		this.props.detAccount(this.props.id)
	}

	handleClick = () => {
		this.props.back.push("/")
	}

	render() {
		const { account } = this.props
		return <DetailAccount account={account} handleClick={this.handleClick} />
	}
}

Detail.propTypes = {
	detAccount: PropTypes.func.isRequired,
	account: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	account: state.accounts.account
})

export default connect(mapStateToProps, { detAccount })(Detail)