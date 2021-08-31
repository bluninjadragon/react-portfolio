import "./App.css";
// import Container from "react-bootstrap/Container";
// import Slide from "react-reveal/Slide";
// import Fade from "react-reveal/Fade";

// import IntroBanner from "./components/IntroBanner/IntroBanner";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import About from "./pages/About/About";

function App() {
  return (
  <div className="App">
    <MyNavbar />
    <div>
      <About />
    </div>
  </div>);
};

export default App;
