import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopRated from './pages/TopRated';
import MensWear from './pages/MensWear'
import Electronics from './pages/Electronics'
import BestSelling from './pages/BestSelling'
import Cart from './pages/Cart';
import WomensWear from './pages/WomensWear';



const App = () => {

  return (
    <div className='bg-white dark:bg-gray-900 
    dark:text-white duration-200 '>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/toprated' element={<TopRated/>}/>
          <Route path='/womenswear' element={<WomensWear/>}/>
          <Route path='/menswear' element={<MensWear/>}/>
          <Route path='/electronics' element={<Electronics/>}/>
          <Route path='/bestselling' element={<BestSelling/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App


