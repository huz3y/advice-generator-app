import PropTypes from "prop-types";

Advice.propTypes = {
  children: PropTypes.array.isRequired,
};

export default function Advice({ children }) {
  return <h1 className="advice-text u-mb-large">{children}</h1>;
}
