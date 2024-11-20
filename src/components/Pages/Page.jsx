import React from "react";


const Page = () => {
  return (
    <div className="mx-auto max-w-[1440px] p-4 bg-gray-600">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {['Shahbaz', 'Ranjha', 'Hello', 'Hello2', 'Shahbaz', 'Ranjha', 'Hello', 'Hello2'].map((item, index) => (
        <div
          key={index}
          className="bg-green-950 text-white text-center p-4 rounded-md">
          {item}
        </div>
      ))}
    </div>
  </div>
  );
};

export default Page;
