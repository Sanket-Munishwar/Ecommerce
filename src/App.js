import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Product from './components/Product';
import {  Routes, Route, Router } from 'react-router-dom'
import ProductDetail from './components/ProductDetail';


function App() {
  return (
   <>
         <Header/>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/product' element={<Product />} />
            <Route exact path='/product/:id' element={<ProductDetail />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route to='/' />     
          </Routes>
          <Footer/>
 
   </>
      
    
  );
}

export default App
