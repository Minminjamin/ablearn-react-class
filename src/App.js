import Footer from "./components/Footer";
import Header from "./components/Header";
import PopUp from "./components/PopUp";

function App() {
  const isPopUp = false;
  return (
    <>
      <Header />
      <Footer />
      {isPopUp ? <PopUp /> : null}
      {/* <PopUp /> */}
    </>
  );
}

export default App;
