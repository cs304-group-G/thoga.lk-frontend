import React, { useState } from "react";
import axios from "axios";
import { Link  } from "react-router-dom";
const AddProduct = () => {

  // const [formData, setFormData] = useState({
  //   title: "",
  //   description: "",
  //   price: "",
  //   city: "",
  //   photoUrls: "",
  // });


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [photos,setPhotos] = useState([]);

const formdata = new FormData();
formdata.append("title", title);
formdata.append("description", description);
formdata.append("price", price);
formdata.append("city", city);
formdata.append("photos", photos);

  const [alert, setAlert] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
      await axios.post("http://localhost:8080/api/v1/product", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxhc2luZHVhQGdtYWlsLmNvbSIsImlhdCI6MTcwNzY4NDA2MiwiZXhwIjoxNzA3NzcwNDYyfQ.NfEQIytDu_w8XnFtzIQnil_YTWOy7IKLQYywU7wWUj8",
        },
        
      })
      .then((result) => {
        console.log(result);
      
        
      }).catch((err) => {
        console.log(err);
      });

      // Display success alert
      setAlert({
        type: "success",
        message: "Vegetable added successfully!",
      });

      // Clear the form after successful submission
  }  
  

  return (
    <div className=" bg-cover pt-4  bg-agri2 w-screen h-screen    ">
      {alert && (
        <div
          className={`${
            alert.type === "success"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          } p-2 mb-4 rounded`}
        >
          {alert.message}
        </div>
      )}
  <Link to='/vegetables' className="bg-blue-900 hover:bg-slate-100  text-white  hover:text-black hover:font-bold  text-bold absolute top-20  p-2 ml-2  ">back to products </Link>
      <form
        onSubmit={handleSubmit}
        className="max-w-md  mx-auto border-[5px] font-bold  border-green-400   p-6"
      >
        <div className=" text-white font-bold text-2xl   text-center ">
          <h1>Add Vegetable</h1>
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-white text-sm font-medium "
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1  p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-white text-sm font-medium "
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-white text-sm font-medium "
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 p-2 border  rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-white"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-white"
          >
            Photo urls
          </label>
          <input
            type="file"
            id="photos"
            name="Add Photos"
            onChange={(e) => setPhotos(e.target.files)}
            className="mt-1 p-2 border rounded w-full"
            multiple
            required
          />
        </div>

        <div className="mb-4 items-center text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Vegetable
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
