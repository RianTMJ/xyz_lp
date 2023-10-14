import './App.css'
import About from './Components/About'
import Features from './Components/Features'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Newsletter from './Components/Newsletter'
import Pricing from './Components/Pricing'
import Footer from './shared/Footer'


function App() {
  

  return (
    <>
      <Navbar/>
      <Home />
      <Features />
      <About />
      <Pricing />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
