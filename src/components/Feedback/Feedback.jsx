import React from "react";

const Feedback = ({ feedback }) => {
  const { good, neutral, bad } = feedback;

  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total:</li>
        <li>Positive:</li>
      </ul>
    </div>
  );
};

export default Feedback;
