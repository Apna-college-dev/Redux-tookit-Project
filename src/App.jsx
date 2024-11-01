import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import Shop from './components/Pages/Shop'
import Footer from './components/Footer'
import Carts from './components/Pages/Carts'
 








function App() {

  return (
    <Router>
      <Navbar />
    <div>
      <Routes>
     <Route path='/' element={<Home/>}/> 
     <Route path='/shop' element={<Shop/>}/> 
     <Route path='/cart' element={<Carts/>}/> 
      </Routes>
      <Footer />
    </div>
    
    </Router>
  )
}

export default App
