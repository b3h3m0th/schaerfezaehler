import React from "react";
import { createRoot } from "react-dom/client";

import { Test } from "./components/test/test";

const App = () => {
  return (
    <div>
      <Test />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
