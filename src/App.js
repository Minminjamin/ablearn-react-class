import { useState } from "react";
import PopUp from "./components/PopUp";
import "./style.scss";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>팝업 열기</button>
      <button onClick={() => setIsOpen(false)}>팝업 닫기</button>
      {isOpen && <PopUp />}
    </>
  );
}

export default App;
