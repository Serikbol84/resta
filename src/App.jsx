import AboutArea from "./Components/aboutArea/AboutArea";
import DeliciousArea from "./Components/deliciousArea/DeliciousArea";
import Header from "./Components/header/Header";
import StartArea from "./Components/start/StartArea";
import "./style/main.css";

function App() {
  return (
    <div className="App">
      <Header />
      <StartArea />
      <AboutArea />
      <DeliciousArea />
    </div>
  );
}

export default App;
