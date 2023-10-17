import React from "react";

export const DateComponent = () => {
    const date = new Date();
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
  return <div className="date">
      Date:{formattedDate}
      </div>
}