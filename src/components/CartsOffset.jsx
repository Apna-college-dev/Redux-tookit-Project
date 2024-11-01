import React from 'react'
import { useState } from 'react'
import { BsCartCheckFill } from 'react-icons/bs'
import { FaRegTrashCan } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeFromCart, removeItem } from '../Slices/CartSlice'
import { MdAdd } from 'react-icons/md'
import { TiMinus } from 'react-icons/ti'



const CartsOffset = () => {
    const [open, setOpen] = useState(false)
    const cartItems = useSelector(state => state.cart.items)

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
    }

    const dispatch = useDispatch()
    const handleAddToCart = (item) => {
        dispatch(addItem(item))
    }

    const handleRemoveCart = (id) => {

        dispatch(removeFromCart(id))
    }
    return (
        <div className=''>
            <button onClick={() => { setOpen(true) }} className='bg-lime-100 relative cursor-pointer h-10 w-10 flex justify-center items-center rounded-full hover:bg-lime-300 transition-all ease-linear duration-300'>
                <span className='bg-red-400 text-xs text-white absolute w-3 h-3 top-0 -right-2 flex justify-center items-center rounded-full'>{cartItems.length}</span>
                <BsCartCheckFill />
            </button>

            <div className={`w-full fixed top-0 right-0 h-screen ${open ? 'block' : 'hidden'} max-h-screen z-50`}>
                <div className={`bg-white z-[100] ${open ? 'translate-x-0' : 'translate-x-full'}  w-full max-w-sm h-full ml-auto relative `}>
                    <div className='w-full flex justify-center items-center'>
                        <div className='w-11/12'>
                            <h1 className='font-bold'>My Cart</h1>
                        </div>
                        <div>
                            <button onClick={() => { setOpen(false) }} className='w-1/2 p-3'><IoClose /></button>
                        </div>
                    </div>
                    <div className='w-full p-3'>
                        <ul className=''>
                            {cartItems.length > 0 && cartItems.map((item) => (
                                <li key={item.id} className='flex justify-center cursor-pointer my-3 group items-center gap-4 bg-gray-50 px-2 py-3'>
                                    <div className='w-20 h-20  overflow-hidden'>
                                        <img className='w-full h-full' src={item.image} alt={item.name} />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-lg'>{item.name}</h1>
                                        <h4 className='text-lime-400 text-sm py-3'>$ {item.price}</h4>
                                        <div className='flex justify-between items-center font-semibold'>
                                            <h3 className='text-lime-400 text-sm ' >Quantity</h3>
                                            <h4 className='text-lime-400 text-sm '>{item.quantity}</h4>
                                        </div>

                                        <div className="flex justify-between items-center  ">
                                            <h3 className="text-sm text-lime-400 font-semibold">Total Amount</h3>
                                            <h4 className="text-lime-400 text-sm py-3 font-bold">{item.totalPrice}</h4>
                                        </div>
                                    </div>
                                    <button onClick={() => handleRemoveCart(item.id)} className=' text-red-500 opacity-0 group-hover:opacity-100 '><FaRegTrashCan /></button>
                                    <button onClick={() => handleRemoveItem(item)} className=' text-green-500 font-bold text-3xl opacity-0 group-hover:opacity-100'><TiMinus /></button>
                                    <button onClick={() => handleAddToCart(item)} className=' text-green-500 font-bold text-3xl opacity-0 group-hover:opacity-100'><MdAdd /></button>
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
                <div onClick={() => { setOpen(false) }} className={`h-full w-full z-[60] fixed top-0  ${open ? 'translate-x-0' : 'translate-x-full'}  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  `}>
                </div>
            </div>

        </div>
    )
}

export default CartsOffset