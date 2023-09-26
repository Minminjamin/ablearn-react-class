import React, { useEffect, useState } from "react";
import "../style.scss";

const PopUp = () => {
  const [Num, setNum] = useState(0);
  useEffect(() => {
    console.log("popup생성");

    return () => {
      console.log("popup소멸");
    };
  }, []);

  useEffect(() => {
    console.log("popup의 Num 상태변화");
  }, [Num]);

  return (
    <aside>
      <h1>{Num}</h1>
      <button onClick={() => setNum(Num - 1)}>minus</button>
      <button onClick={() => setNum(Num + 1)}>plus</button>
    </aside>
  );
};

export default PopUp;
