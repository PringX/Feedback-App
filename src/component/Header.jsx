import React from 'react'
import PropTypes from 'prop-types'


function Header(props) {
	const headerStyle = {
		backgroundColor: props.bgColor,
		color: props.textColor
	}
	return (
		<header style={ headerStyle }>
			<div className='container'>
					<h1>Feedback UI</h1>
			</div>
		</header>
	)
}

Header.defaultProps = {
	bgColor: 'pink',
	textColor: 'blue'
}

Header.propTypes = {
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
}
export default Header