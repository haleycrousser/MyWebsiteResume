import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

import AboutMe from './Pages/AboutMe.jsx'
import Education from './Pages/Education.jsx'
import Experience from './Pages/Experiences.jsx'
import Projects from './Pages/Projects.jsx'
import Skills from './Pages/Skills.jsx'


function App() {
  

  return(
    <BrowserRouter>

    <Header />

    <Routes>
      <Route path ="/" element={<AboutMe />} />
      <Route path ="/experience" element={<Experience />} />
      <Route path ="/education" element={<Education />} />
      <Route path ="/projects" element={<Projects />} />
      <Route path ="/skills" element={<Skills />} />
    </Routes>

    <Footer />
    
    </BrowserRouter>
  );
}

export default App
