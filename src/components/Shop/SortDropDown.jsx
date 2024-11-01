import React from 'react'

const SortDropDown = ({sortDropdown,setSortDropdown}) => {



const handleSortChange=(e)=>{
 const value=e.target.value
 setSortDropdown(value)
}
  return (
    <div>
        <select className='focus:outline-none border border-gray-200 py-2 rounded-md bg-white' id="sortDropDown" value={sortDropdown} onChange={handleSortChange}>
            <option value="">Select...</option>
            <option value="price-asc">Price:Low to High</option>
            <option value="price-desc">Price:High to Low</option>
            <option value="name-asc">Name:A to Z</option>
            <option value="name-desc">Name:Z to A</option>
        </select>
    </div>
  )
}

export default SortDropDown