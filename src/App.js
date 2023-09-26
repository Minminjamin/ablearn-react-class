import { useRef } from "react";
import "./style.scss";

function App() {
  // const [num, setNum] = useState(0);
  let num = useRef(0);
  let box = useRef(null);

  const prev = () => {
    box.current.style.transform = `rotate(${--num.current * 45}deg)`;
  };
  const next = () => {
    box.current.style.transform = `rotate(${++num.current * 45}deg)`;
  };

  return (
    <>
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>

      <article ref={box}></article>
    </>
  );
}

export default App;
