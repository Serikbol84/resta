import AboutArea from "./Components/aboutArea/AboutArea";
import DeliciousArea from "./Components/deliciousArea/DeliciousArea";
import GalleryArea from "./Components/galleryArea/GalleryArea";
import Header from "./Components/header/Header";
import StartArea from "./Components/start/StartArea";
import TestimonialArea from "./Components/testimonialArea/TestimonialArea";
import "./style/main.css";

function App() {
  return (
    <div className="App">
      <Header />
      <StartArea />
      <AboutArea />
      <DeliciousArea />
      <TestimonialArea />
      <GalleryArea />
    </div>
  );
}

export default App;
