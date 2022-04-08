import React, { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    setCounter(count);
  });

  return (
    <div>
      <div>Anzahl Scharf: {count}</div>
      <button onClick={() => setCounter(count + 1)}>
        Add Scharf
      </button>
    </div>
  );
};
