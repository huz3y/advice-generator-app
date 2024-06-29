import PropTypes from "prop-types";

Button.propTypes = {
  onGenerateMessage: PropTypes.func.isRequired,
};

export default function Button({ onGenerateMessage }) {
  return (
    <button className="btn" onClick={onGenerateMessage}>
      <img src="./images/icon-dice.svg"></img>
    </button>
  );
}
