import React from "react";

export const NutritionBar = ({ type, value, max }) => {
  const percentage = (value / max) * 100;
  return (
    <div className="nutrition-bar-container">
      <div className="nutrition-bar-labels">
        <p>
          {type} - {value}/{max}g
        </p>{" "}
        {/* Display the current value and max value */}
        <p>{percentage.toFixed(2)}%</p> {/* Display the percentage */}
      </div>
      <div className="nutrition-bar">
        <div
          className={`nutrition-bar__fill nutrition-bar__fill--${type}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
