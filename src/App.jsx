
import Home from './Home'
import About from './About'
import Contact from './Contact'
import React from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import img1 from './assets/react.svg';


function App() {
  return (
    
    <Router>
      <div className='header'>
        <img src={img1}/>

        <h2 className='name'>ABC</h2>
      <nav>
        
          <Link className='home' to="/">Home</Link>
          <Link className='about' to="/about">About</Link>
           <Link className='contact'to="/contact">Contact</Link>
        
        
      </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <footer>
      <h1>Copyright &copy; 2024</h1>
      </footer>
    </Router>
 
    
    
  )
}

export default App
