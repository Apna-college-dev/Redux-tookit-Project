import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../Slices/CartSlice'
import { FaRegTrashCan } from 'react-icons/fa6'
import { MdEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Carts = () => {
    const cartItems = useSelector(state=>state.cart.items)
    const totalQuantity = useSelector(state=>state.cart.totalQuantity)
    const totalAmount = useSelector(state=>state.cart.totalAmount)
    const navigate = useNavigate ('/')
    const dispatch=useDispatch()
    const handleRemoveCart=(id)=>{
        dispatch(removeFromCart(id))
    } 
    const handleEditCart = (id) => {
        navigate(`/form/${id}`);
    };
    return (
        <div className='w-full h-full flex flex-col py-3 justify-center items-center'>
            <h1 className='text-center font-bold text-xl py-3'>My Cart</h1>
            <div className="w-11/12 py-3 min-h-[50vh]">
                <table className='w-full h-full'>
                    <thead className='px-2 py-3 bg-gray-300'>
                        <tr className='font-bold'>
                            <th className='py-3'>ID</th>
                            <th className='py-3'>Image</th>
                            <th className='py-3'>Name</th>
                            <th className='py-3'>Quantity</th>
                            <th className='py-3'>Price</th>
                            <th className='py-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-gray-50'>
                        {cartItems.length > 0 ? (cartItems.map((item)=>(
                          <tr key={item} className='hover:bg-gray-100 text-center'>
                          <th className='py-3'>{item.id}</th>
                          <th className='py-3'>
                         <img src={item.image} className='w-16 h-16 object-cover' />
                          </th>
                          <th className='py-3'>{item.name}</th>
                          <th className='py-3'> {item.quantity}</th>
                          <th className='py-3'>{item.price}</th>
                          <th className='py-3 flex justify-center items-center '>
                          <button onClick={()=>handleRemoveCart(item.id)} className='text-red-500 '><FaRegTrashCan /></button>
                          <button onClick={()=>handleEditCart(item.id)} className='text-green-500 px-4'><MdEdit /></button>
                          </th>
                      </tr>
                        ))
                        
                        ):(
                            <tr className='hover:bg-gray-100 text-center'>
                                <td colSpan={5} className='py-3'>
                                    The Cart is Empty
                                </td>
                            </tr>
                        )}
                        
                    </tbody>
                    <tfoot className='w-full'>
                        <tr>
                            <td className='p-3' colSpan={3}>
                                Total Quantity: {totalQuantity}
                            </td>
                            <td className='p-3 text-right' colSpan={3}>
                                Total Amount: $ {totalAmount}
                            </td>
                        </tr>
                    </tfoot>
                </table>
                
            </div>
        </div>
    )
}

export default Carts