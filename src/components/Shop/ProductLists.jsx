import React, { useEffect, useState } from 'react'
import SortDropDown from './SortDropDown'
import json from '../../../public/img/Product/Products.json'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../Slices/CartSlice'





const ProductLists = () => {
  const [sortDropdown, setSortDropdown] = useState([])
  const [sortedData, setSortedData] = useState(json.products);
  const [addedProductId, setAddedProductId] = useState(null);

  const dispatch = useDispatch()
  const cartItems=useSelector(state=>state.cart.items)
  const handleAddtoCart = (product) => {
    const isInCart = cartItems.some(item => item.id === product.id);
    if (!isInCart) {
      dispatch(addToCart(product));
      setAddedProductId(product.id); // Set the recently added product ID
      // Optionally reset the added product ID after a delay
      setTimeout(() => setAddedProductId(null), 2000); // Reset after 2 seconds
    }else{
      alert('items already in cart')
    }
}

  useEffect(() => {
    let sortedProducts = [...json.products];


    switch (sortDropdown) {
      case 'price-asc':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setSortedData(sortedProducts);
  }, [sortDropdown]);


  return (
    <>
      <div className="w-full flex justify-end items-center">
        <SortDropDown sortDropdown={sortDropdown} setSortDropdown={setSortDropdown} />
      </div>
      <div className="grid grid-cols-3 gap-3 py-6">
        {sortedData.length > 0 &&
          sortedData.map((product) => (
            <div className="" key={product.id}>
              <div className="w-full h-full hover:cursor-pointer">
                <div className="relative">
                  <img src={product.images} alt={product.name} />
                  {addedProductId === product.id && (
                    <div className="absolute inset-0 top-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-lg font-semibold ">
                      Items added to Cart
                    </div>
                  )}
                </div>
                <div className="flex justify-center items-center">
                  <button onClick={() => handleAddtoCart(product)} type='button'className= {cartItems.some(item => item.id === product.id) ? "absolute rounded-lg p-3 bg-gray-300 hover:bg-lime-700 transition-all ease-linear duration-500" : "absolute rounded-lg p-3 bg-lime-300 hover:bg-lime-700 transition-all ease-linear duration-500"}>
                  {cartItems.some(item => item.id === product.id) ? 'Items in Cart' : 'Add to Cart'}
                  </button>
                </div>
                <div className="py-6">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold">{product.name}</h1>
                    <h4 className="font-bold text-lime-500">${product.price}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

    </>
  )
}

export default ProductLists