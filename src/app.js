import React from "react";
import { createRoot } from "react-dom/client";

import * as fromCounter from "./components/counter/counter";

const App = () => {
  return (
    <div>
      <div>Döner</div>
      <fromCounter.Counter />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
