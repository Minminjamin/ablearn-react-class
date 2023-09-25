import React from "react";
import "../style.scss";

const Header = () => {
  // const name = "jamin";
  const handler = (text) => {
    console.log(text);
  };
  return (
    <div>
      <h1 className="title">Header</h1>
      <p onClick={() => handler("jamin")}>링크</p>
    </div>
  );
};

export default Header;
