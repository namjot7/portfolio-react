import './App.css'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-20">
        <About />
        <ContactForm />
      </div>
      <footer className='bg-gray-800 text-white text-sm text-center px-5 py-2'>
        &copy; 2025 Namjot Singh. All rights reserved.
      </footer>
    </>
  )
}

export default App
