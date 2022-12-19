import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

import ActiveIndicator from "./Components/ActiveIndicator/ActiveIndicator";
import Skills from "./Components/Skills/Skills";
import Name from "./Components/Name/Name";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Projects } from "./Components/Projects/Project";
import { About } from "./Components/About/About";
import Github from "./Components/About/Github";
import { Techstacks } from "./Components/About/Techstacks";



function App() {
  return (
    <div className="App" >
      <Navbar />
      <Home />
      <br/>
     
      <Projects />
     
      <Github /> 
      <Techstacks/>
      
      <Footer/>
   
    </div>
  );
}

export default App;
