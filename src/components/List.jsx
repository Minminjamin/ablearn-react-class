import React from "react";

const List = () => {
  const colors = ["red", "green", "blue"];
  ///
  return (
    <ul>
      {colors.map((color, index) => (
        <li key={index} style={{ color: color }}>
          {color}
        </li>
      ))}
    </ul>
  );
};

export default List;
