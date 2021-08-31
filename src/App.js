import "./App.css";
import IntroBanner from "./components/IntroBanner/IntroBanner";
import MyNavbar from "./components/MyNavbar/MyNavbar";

function App() {
  return <div className="App">
    <MyNavbar fixed="top" />
    <IntroBanner />
  </div>;
}

export default App;
