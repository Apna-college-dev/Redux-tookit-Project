import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import Shop from './components/Pages/Shop'
import Footer from './components/Footer'
import Carts from './components/Pages/Carts'
import Items from './components/Pages/Items';
import PopUp from './components/Pages/PopUp';
import Page from './components/Pages/Page';






const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/shop',
    element: (
      <>
        <Navbar />
        <Shop />
        <Footer />
      </>
    ),
  },
  {
    path: '/cart',
    element: (
      <>
        <Navbar />
        <Carts />
        <Footer />
      </>
    ),
  },
  
  {
    path: '/popup/:id',
    element: (
      <>
      <PopUp/>
      </>
    ),
  },
  {
    path: '/items',
    element: (
      <>
        <Navbar />
        <Items />
        <Footer />
      </>
      
    ),
  },
  {
    path: '/page',
    element: (
      <>
        <Navbar />
        <Page/>
        
      </>
      
    ),
  },
]);



 
function App() {

  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  )
}

export default App
