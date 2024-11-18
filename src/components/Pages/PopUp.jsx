import React, {useEffect } from "react";
import { useForm} from "react-hook-form";
import { useDispatch } from "react-redux";
import { ReactDialogBox } from "react-js-dialog-box";
import "react-js-dialog-box/dist/index.css";
import { AddItem } from "../../Slices/ProductCarts";

const PopUp = ({isOpen, closeBox,data}) => {
  const {register, handleSubmit, reset, setValue } = useForm();
  const dispatch = useDispatch();
  console.log("data", data);

  useEffect(() => {
    if (isOpen && data?.id) {
      setValue("name", data.name);
      setValue("images", data.images);
      setValue("price", data.price);
    } else{
      
      setValue("name", null);
      setValue("images", null);
      setValue("price", null);
    }
  }, [isOpen]);

  const onSubmit = async (values) => {
    const file = values.image[0]; //
    if (file){
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        values.image = base64String;
        dispatch(
          AddItem({
            name: values.name,
            images: base64String,
            price: parseFloat(values.price),
          })
        );
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
    reset();
    closeBox();
  };

  return (
    <div>
      {isOpen && (
        <ReactDialogBox
          closeBox={closeBox}
          modalWidth="40%"
          headerHeight="auto"
          bodyBackgroundColor="white"
          bodyTextColor="black"
          bodyHeight="auto"
          headerText="Add New Item"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-3 w-full p-2 gap-4"
          >
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              {...register("name", {
                required: { value: true, message: "required" },
              })}
              type="text"
              id="img"
              placeholder=""
              className="w-full p-1 rounded col-span-2 border-black bg-gray-100 text-gray-600 focus:outline-none"
            />

            <label htmlFor="image" className="block text-gray-700 font-medium">
              Image
            </label>
            <input
              {...register("image", {
                required: { value: true, message: "required" },
              })}
              type="file"
              id="image"
              className="w-full p-1 rounded col-span-2 border-black bg-gray-100 text-gray-600 focus:outline-none"
            />

            <label htmlFor="price" className="block text-gray-700 font-medium">
              Price
            </label>
            <input
              {...register("price", {
                required: { value: true, message: "required" },
              })}
              type="number"
              id="price"
              placeholder="$ Price"
              className="w-full p-1 rounded col-span-2 border-black bg-gray-100 text-gray-600 focus:outline-none"
            />

            <div className="flex justify-end items-center col-span-3">
              <button className="p-4 text-md">Save</button>
              <button className="p-4 text-md" onClick={closeBox}>
                Cancel
              </button>
            </div>
          </form>
        </ReactDialogBox>
      )}
    </div>
  );
};

export default PopUp;
