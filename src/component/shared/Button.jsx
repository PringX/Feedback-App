import PropTypes from 'prop-types';

function Button({ children, version, type, isDisabled }) {
	return (
		<button
			type={type}
			className={`btn btn-${version}`}
			disabled={isDisabled}
		>
			{children}
		</button>
	);
}

Button.defaultProps = {
	version: 'primary',
	type: 'submit',
	isDisabled: false,
};

Button.propTypes = {
	version: PropTypes.node.isRequired,
	type: PropTypes.string.isRequired,
	isDisabled: PropTypes.bool,
};

export default Button;
