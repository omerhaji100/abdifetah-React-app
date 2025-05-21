// App.jsx
import { useState } from "react";

export function Tiriye() {
  let [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
      <h2>count: {count} </h2>
      <button onclick={() => setCount(count + 1)}>Increase</button>
      <button onclick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
