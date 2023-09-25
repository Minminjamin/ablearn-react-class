import { useState } from "react";
import "./style.scss";

function App() {
  const [dgree, setDgree] = useState(0);
  return (
    <>
      <article style={{ transform: `rotate(${dgree}deg)` }}>{dgree}</article>
      <button
        onClick={() => {
          setDgree(dgree - 45);
        }}
      >
        왼쪽으로 회전
      </button>
      <button
        onClick={() => {
          setDgree(dgree + 45);
        }}
      >
        오른쪽으로 회전
      </button>
    </>
  );
}

export default App;
