import './App.css'
import About from './sections/about/About';
import Experience from './sections/Experience/Experience';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Navbar from './sections/Navbar/Navbar';
import Projects from './sections/Projects/Projects';

function App() {
 
  return (
    <>
      <Navbar/>
      <Hero/>
      <Experience/>
      <Projects/>
      <About/>
      <Footer/>
    </>
  )
}

export default App;
