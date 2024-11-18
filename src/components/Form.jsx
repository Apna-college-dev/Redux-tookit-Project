import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { addItem } from '../Slices/CartSlice';




  const Form = () => {
  const { id } = useParams()
  console.log('id', id);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  // Select the item from Redux state based on ID
  const item = useSelector((state) =>
    state.cart.items.find((item) => item.state === id)
  );

  // Local state to manage form values
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  // Populate form with current item details
  useEffect(() => {
    if (item) {
      setName(item.name);
      setQuantity(item.quantity);
      setPrice(item.price);
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch update action
    dispatch(addItem({ id, name, quantity, price: parseFloat(price) }));
    // Navigate back to the cart page
    navigate('/cart');
  };

  return (
    <div className="w-full h-full flex flex-col py-3 justify-center items-center">
      <h2 className="text-center font-bold text-xl py-3">Edit Item</h2>
      <form onSubmit={handleSubmit} className="w-11/12 max-w-md p-3 bg-gray-100 rounded">
        <div className="mb-3">
          <label className="block font-bold mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-3">
          <label className="block font-bold mb-1">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 border rounded "
          />
        </div>
        <div className="mb-3">
          <label className="block font-bold mb-1">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white font-bold rounded">
          Update Item
        </button>
      </form>
    </div>


  )
}

export default Form 