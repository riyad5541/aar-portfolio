import { useEffect } from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Aos from "aos";
import "aos/dist/aos.css"

const App = () =>{
  useEffect(() => {
    Aos.init();
    
   }, [])
  return(
    <>
    <Navbar></Navbar>
    <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App;