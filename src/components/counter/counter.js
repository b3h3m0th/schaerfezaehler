import React, { useState, useEffect } from "react";

export const Counter = ({ start, end }) => {
  const [count, setCounter] = useState(start);

  useEffect(() => {
    setCounter(count);
  });

  return (
    <div>
      <div>Anzahl Scharf: {count}</div>
      <button
        onClick={() => {
          if (count < end) setCounter(count + 1);
        }}
      >
        Add Scharf
      </button>
    </div>
  );
};
