import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Projects } from "./Components/Projects/Project";
import Github from "./Components/About/Github";
import { Techstacks } from "./Components/About/Techstacks";
import Intro from "./Components/Intro/Intro";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
import { useState } from "react";
import SocialBar from "./Components/SocialBar/SocialBar";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 1500);
  }

  return (
    !loading && (
      <div className="App">
        <Navbar />
        <SocialBar />
        <Home />
        <Intro />
        <br />
        <Techstacks />
        <br />
        <Projects />
        <br />
        <Github />

        <br />
        <Footer />

        <ScrollToTop />
        
      </div>
    )
  );
}

export default App;
