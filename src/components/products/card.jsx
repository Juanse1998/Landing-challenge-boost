import React from "react";

const Card = ({ product, onClick }) => {
  return (
    <div
      className="border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer p-6 flex flex-col items-center max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg"
      onClick={onClick}
    >
      <div className="w-full mb-4">
        <img
          className="w-full h-48 object-cover rounded-lg"
          src={product.img}
          alt={product.title}
        />
      </div>
      <div className="text-center">
        <h4 className="text-xl font-semibold mb-2">{product.title}</h4>
        <p className="text-gray-600 text-sm">{product.description}</p>
      </div>
    </div>
  );
};

export default Card;