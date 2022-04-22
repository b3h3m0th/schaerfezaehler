import React from "react";
import { createRoot } from "react-dom/client";
import { Input } from "./components/input/input";

const App = () => {
  return (
    <div>
      <Input />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
