import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import PopUp from "./components/PopUp";

function App() {
  const isPopUp = false;
  const isFooter = true;
  return (
    <>
      <Header />
      {isFooter && <Footer />}
      {isPopUp ? <PopUp /> : null}
      <List />
      {/* <PopUp /> */}
    </>
  );
}

export default App;
