import React, { useState } from "react";

function Dumb(props) {
  return <div>{props.something}</div>;
}
export default function Counter(props) {
  const [count, setCount] = useState(0);

  function update(e) {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={update}>Click ({count})</button>
      <Dumb something={count} />
      <Dumb something={count} />
    </div>
  );
}
