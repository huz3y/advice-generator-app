import PropTypes from "prop-types";

Button.propTypes = {
  onGenerateMessage: PropTypes.func.isRequired,
};

export default function Button({ onGenerateMessage }) {
  return (
    <button className="btn" onClick={onGenerateMessage}>
      <img src="./src/assets/images/icon-dice.svg"></img>
    </button>
  );
}
