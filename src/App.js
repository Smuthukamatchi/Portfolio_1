import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Qualification from './components/qualification/Qualification';
import Skills from './components/skill/Skills';
import Project from './components/project/Project';
// import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Qualification />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
