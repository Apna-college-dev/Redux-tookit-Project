import React from 'react'
import { Link } from 'react-router-dom';
import CartsOffset from './CartsOffset';
import { IoHome } from 'react-icons/io5';
import { BsCart } from 'react-icons/bs';
import { GiShoppingBag } from 'react-icons/gi';







const Navbar = () => {
  const navItems = [
    {
      "label": "Home",
      "path": "/",
      "icon":<IoHome />
    },
    {
      "label": "Shop",
      "path": "/shop",
      "icon":<GiShoppingBag/>
      
    },
    {
      "label": "Cart",
      "path": "/cart",
      "icon":<BsCart />
    },
    {
      "label": "List Items",
      "path": "/items",
      "icon":<BsCart />
    },
    
  ]


  return (
    <>
      <div className='w-full flex justify-center py-7 items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
        <div className='w-10/12 flex justify-center py-3 px-3 items-center'>
          <div className='flex-1'>
            <h1 className='logo font-bold text-2xl'>
              Furniture
            </h1>
          </div>
          <div className='flex-1 flex justify-center items-center'>
            <ul className='flex justify-center items-center gap-2'>
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>
                  <span className='sm:block hidden'>
                    {item.label}
                  </span>
                  <span className='sm:hidden block '>
                  {item.icon}
                  </span>
                  </Link>
                </li>
              ))}

            </ul>
          </div>
          <div className='flex-1 text-xl gap-4 flex justify-end items-center'>
          <CartsOffset />
          </div>

        </div>
      </div>

    </>
  )
}

export default Navbar
