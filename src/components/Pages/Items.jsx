import React, { useState } from "react";
import ReactTable from "../ReactTable";
import { useSelector } from "react-redux";
import { MdEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import PopUp from "./PopUp";

const Items = () => {
  const items = useSelector((state) => state.product.items);
  const [filter, setFilter] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState({});

  const handleEdit = (data) => {
    setIsOpen(true)
    setEditData(data)
  };

  const handleDelete = () => {};
  const columns = [
    { header: "ID", accessorFn: (row) => row.id, id: "id" },
    {
      header: "Image",
      accessorFn: (row) => row.image,
      id: "image",
      cell: (info) => (
        <img
          src={info.row.original.images}
          alt="product"
          className="w-16 h-16 object-cover"
        />
      ),
    },
    { header: "Name", accessorFn: (row) => row.name, id: "name" },
    { header: "Price", accessorFn: (row) => `$${row.price}`, id: "price" },
    {
      Header: "Action",
      accessorFn: (row) => row.action,
      id: "action",
      cell: (info) => (
        <div>
          <button
            onClick={() => handleEdit(info.row.original)}
            className="text-green-500 px-4"
          >
            <MdEdit/>
          </button>
          <button
            onClick={() => handleDelete(info.row.original)}
            className="text-red-500 "
          >
            <FaRegTrashCan/>
          </button>
        </div>
      ),
    },
  ];

  const openBox = () => {
    setIsOpen(true);
  };

  const closeBox = () => {
    setIsOpen(false);
    setEditData({})
  };

  return (
    <div className="w-full h-full flex flex-col py-3 justify-center items-center">
      <h1 className="text-center font-bold text-xl py-3">List Items</h1>
      
      <div className="flex justify-between items-center py-2">
     <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={openBox}
          className="bg-gray-500 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded"
        >
          Add new
        </button>
        </div>
        <PopUp isOpen={isOpen} closeBox={closeBox} data={editData} />
      <div className="w-11/12 py-3 min-h-[50vh]">
        <ReactTable
          columns={columns}
          data={items}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
};

export default Items;
