import { useState, useEffect } from "react";
import PropTypes from "prop-types";

Advice.propTypes = {
  children: PropTypes.array.isRequired,
};

CountAdvice.propTypes = {
  count: PropTypes.number.isRequired,
};

Button.propTypes = {
  onGenerateMessage: PropTypes.func.isRequired,
};

export default function App() {
  return (
    <>
      <Card />
    </>
  );
}

function Card() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function generateMessage() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((s) => s + 1);
  }

  useEffect(() => {
    generateMessage();
  }, []);

  return (
    <div className="card">
      <CountAdvice count={count} />
      <Advice>&ldquo;{advice}&rdquo;</Advice>
      <Divider />
      <Button onGenerateMessage={generateMessage} />
    </div>
  );
}

function CountAdvice({ count }) {
  return <p className="count-text count u-mb-medium">Advice #{count}</p>;
}

function Advice({ children }) {
  return <h1 className="advice-text u-mb-large">{children}</h1>;
}

function Divider() {
  return (
    <img
      className="divider u-mb-large"
      src="./src/assets/images/pattern-divider-desktop.svg"
    />
  );
}

function Button({ onGenerateMessage }) {
  return (
    <button className="btn" onClick={onGenerateMessage}>
      <img src="./src/assets/images/icon-dice.svg"></img>
    </button>
  );
}
