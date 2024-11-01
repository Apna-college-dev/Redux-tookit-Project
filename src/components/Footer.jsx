import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaFacebook, FaRegCopyright } from 'react-icons/fa6'

const Footer = () => {
    return (
        <>
        <div className='w-full bg-gray-100'>
        <div className='w-11/12 h-full flex justify-center items-center px-3 py-3 bg-gray-100'>
            <div className="col flex-1 ">
                <h1 className='logo font-bold text-2xl'>
                    Furniture
                </h1>
                <p className='text-sm text-gray-500 italic py-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quaerat, culpa dolores nesciunt est deleniti voluptatem officiis ex, perspiciatis asperiores aspernatur corrupti quidem sint tempore eum in maiores quisquam molestias.</p>
            </div>
            <div className="col flex-1">
                <h1 className='font-bold py-2 text-2xl'>Quick links</h1>
                <ul className='flex flex-col gap-3'>
                    <li className='font-bold hover:text-lime-400 cursor-pointer'>Home</li>
                    <li className='font-bold hover:text-lime-400 cursor-pointer'>About</li>
                    <li className='font-bold hover:text-lime-400 cursor-pointer'>Shop   </li>
                    </ul>
            </div>
            <div className="col flex-1">
                <h1 className='font-bold py-2 text-2xl'>Terms & conditions</h1>
                <ul className='flex flex-col gap-3'>
                    <li className='font-bold hover:text-lime-400 cursor-pointer'>Privacy Policy</li>
                    <li className='font-bold hover:text-lime-400 cursor-pointer'>Terms of users</li>
                    </ul>
            </div>
            <div className="col flex-1">
                <h1 className='font-bold  py-2 text-2xl '>Social links</h1>
                <ul className='flex text-2xl w-fit gap-5'>
                    <li className='font-bold hover:text-lime-400 cursor-pointer'><button className='p-4 bg-lime-400 hover:bg-lime-500 transition-all ease-linear duration-300 rounded-md hover:text-white'><FaFacebook /></button></li>
                    <li className='font-bold hover:text-lime-400 cursor-pointer'><button className='p-4 bg-lime-400 hover:bg-lime-500 transition-all ease-linear duration-300 rounded-md hover:text-white'><FaInstagramSquare />
                    </button></li>
                    <li className='font-bold hover:text-lime-400 cursor-pointer'><button className='p-4 bg-lime-400 hover:bg-lime-500 transition-all ease-linear duration-300 rounded-md hover:text-white'><BsTwitterX />
                    </button></li>
                    </ul>
            </div>
        </div>
        <div className="flex justify-between items-center mx-auto border-t border-gray-600 py-4 bg-gray-100">
            <h4 className='flex items-center mx-auto gap-2 font-semibold'><FaRegCopyright />All right reserved Forniture 2024</h4>
            <img src="./img/card.png" alt="card" className='w-full h-full max-w-sm' />
        </div>
        </div>
        </>
    )
}

export default Footer