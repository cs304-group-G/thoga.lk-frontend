import React, { useState } from "react";
import UpdateProduct from "../Product_CRUD/updateProduct";

const UpdateProductButton = () => {
  const [showUpdateProduct, setShowUpdateProduct] = useState(false);

  const toggleUpdateProduct = () => {
    setShowUpdateProduct((prevShowUpdateProduct) => !prevShowUpdateProduct);
  };

  return (
    <div>
      <button class="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500"
      onClick={toggleUpdateProduct}>
        <span class="font-bold text-white text-xl relative z-10 group-hover:text-green-500 duration-500">
         Update Product
        </span>
        <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
        <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>

        <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
        <span class="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
      </button>

      {showUpdateProduct && <UpdateProduct />}
    </div>
  );
};

export default UpdateProductButton;
