import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Product from './components/Product';
import {  Routes, Route } from 'react-router-dom'


function App() {
  return (
   <>
      <Header/>
   
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/product' element={<Product />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route to='/' />
            
          </Routes>
     
      

   </>
      
    
  );
}

export default App;
