import React, { useState } from "react";
import "./Counter.css"; // Make sure to import your custom CSS file

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const toggleCounter = () => {
    setShowCount(!showCount);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter</h1>
      <div className="counter">
        <button className="counter-button" onClick={decrement}>
          -
        </button>
        <span className="counter-value">{count}</span>
        <button className="counter-button" onClick={increment}>
          +
        </button>
      </div>
      <div className="counter-controls">
        <button onClick={toggleCounter} className="toggle-button">
          {showCount ? "Hide Count" : "Show Count"}
        </button>
      </div>
      {showCount && (
        <div className="counter-message">
          <p>You've clicked the button {count} times.</p>
        </div>
      )}
    </div>
  );
};

export default Counter;
