import './App.css';
import Navbar from './components/NavBar'
import Info from './components/Info'
import Links from './components/Links.js'
import About from './components/about.js';
import Skills from './components/Skills.js';
import Education from './components/education.js';
import Projects from './components/projects.js';
import EducationS from './components/EducationS.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Info/>
      </div>
      <div className="main-content">
        <Links/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Skills/>
      </div>
      <div>
        <Education/>
      </div>
      <div>
          <EducationS/>
      </div>
      
      <div>
        <Projects/>
      </div>
    </div>
  );
}



export default App;
