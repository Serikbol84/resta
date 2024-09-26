import AboutArea from "./Components/aboutArea/AboutArea";
import Header from "./Components/header/Header";
import StartArea from "./Components/start/StartArea";
import "./style/main.css";

function App() {
  return (
    <div className="App">
      <Header />
      <StartArea />
      <AboutArea />
    </div>
  );
}

export default App;
