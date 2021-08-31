import "./App.css";
// import Container from "react-bootstrap/Container";
// import Slide from "react-reveal/Slide";
// import Fade from "react-reveal/Fade";

// import IntroBanner from "./components/IntroBanner/IntroBanner";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import About from "./pages/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

function App() {
  return (
  <div className="App">
    <MyNavbar />
    <div>
      <About />
    </div>
    <div>
      <Portfolio />
    </div>
    <div>
      <Footer />
    </div>
  </div>);
};

export default App;
