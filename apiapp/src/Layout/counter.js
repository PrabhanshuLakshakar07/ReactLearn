import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>

      <h2>Count: {count}</h2>

      <button onClick={handleAdd}>➕ Add</button>{" "}
      <button onClick={handleSubtract}>➖ Subtract</button>{" "}
      <button onClick={handleReset}>🔄 Reset</button>
    </div>
  );
}

export default Counter;