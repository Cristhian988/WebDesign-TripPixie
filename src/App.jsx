import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Destination from './Components/Destination'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
     <Navbar /> 
     <main>
      <section id="home">
        <Home />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="destination">
        <Destination />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
     </main>
     <footer>
      <Footer />
     </footer>
    </>
  )
}

export default App
