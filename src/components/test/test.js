import React, { useState, useMemo } from "react";

const expensiveCalculation = num => {
  for (let i = 0; i < 1000000000; i++) {}
  return num;
};

export const Test = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = useMemo(
    () => expensiveCalculation(count),
    [count]
  );

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = () => {
    setTodos(t => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <button onClick={() => addTodo()}>Add ToDo</button>
        <h1>My Todos</h1>
        <ul>
          {todos.map(t => {
            return <li>{t}</li>;
          })}
        </ul>
      </div>
      <div>
        <button onClick={() => increment()}>Increase</button>
        Count: {count} <br />
        Expensive count: {calculation}
      </div>
    </div>
  );
};
