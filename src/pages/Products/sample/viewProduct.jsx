import React from "react";
import { Link } from "react-router-dom";

export default function viewProduct() {
  return (
    <>
      <div className="flex flex-col space-y-3 items-center mb-5 ">
        <h1 className="text-center text-white font-bold font-inter  mb-5  underline text-4xl">---  All products  ---</h1>
        <Link to='/vegetables'>
          <button
            className="bg-slate-800 rounded-lg p-3 shadow-lg  w-64 text-green-400 font-bold text-3xl hover:bg-green-500 hover:text-slate-100"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span >
              <img width="64" height="64" src="https://img.icons8.com/external-outline-berkahicon/64/FFFFFF/external-Vegetables-self-improvement-outline-berkahicon.png" className="mr-1"/>
            </span>
            Vegetables
          </button>
        </Link>
        

        <Link to='/fruits'>
          <button
            className="bg-slate-800 rounded-lg p-3 shadow-lg w-64 text-red-400 font-bold text-3xl hover:bg-red-500 hover:text-slate-100"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span
             
            >
              <img width="64" height="64" src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/64/FFFFFF/external-Fruits-healthy-diet-nawicon-detailed-outline-nawicon.png" className="mr-2"/>
            </span>
            Fruits
          </button>
        </Link>



        <Link to='/items'>
          <button
            className="bg-slate-800 rounded-lg p-3 shadow-lg w-64 text-blue-500 font-bold text-3xl hover:bg-blue-500 hover:text-slate-100"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span
             
            >
              
              <img width="64" height="64" src="https://img.icons8.com/ios/64/FFFFFF/tractor.png" className="mr-2 "/>
            </span>
            Items
          </button>
        </Link>
      </div>
    </>
  );
}
