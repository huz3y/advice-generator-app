import PropTypes from "prop-types";

CountAdvice.propTypes = {
  count: PropTypes.number.isRequired,
};

export default function CountAdvice({ count }) {
  return <p className="count-text count u-mb-medium">Advice #{count}</p>;
}
