import { useState, useEffect } from "react";
import CountAdvice from "./CountAdvice";
import Advice from "./Advice";
import Divider from "./Divider";
import Button from "./Button";
export default function Card() {
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
