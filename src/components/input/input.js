import React, { useRef, useEffect, useState } from "react";

export const Input = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(inputRef.current.value);
  });

  return (
    <div>
      <div>
        test
        <input
          type="text"
          ref={inputRef}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};
