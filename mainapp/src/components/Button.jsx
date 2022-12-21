// Author: Kyle Snow
// Software Development Semster 2
// Keyin College
// started: Dec 8, 2022
// Finished: Dec 20, 2022

// component used in the feed page
// this component creates a button which is used later to add function to them

import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  color: "purple",
  text: "DEFUALT",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
