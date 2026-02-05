import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { qntIncrese, qntydecrease, dataRemove } from "../cartslice";
import { useNavigate } from "react-router-dom";

const Cartdata = () => {
  const prodata = useSelector(state =>state.mycart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let netAmount = 0;
  let sno = 0;
  const Datacart=prodata.map((key)=>{
    netAmount += key.prize * key.qnty;
    sno++;
    return(
      <>
          <tr key={key.id} className="border-b hover:bg-gray-50">
            <td className="px-4 py-3">{sno}</td>
            <td className="px-4 py-3">
              <img src={key.img} width="100" height="100" alt={key.name} />
            </td>
            <td className="px-4 py-3">{key.name}</td>
            <td className="px-4 py-3">{key.prize}</td>
            <td className="px-4 py-3 text-center">
              <a href="#!" onClick={() => {dispatch(qntydecrease({ id: key.id }));}}>
                <FaCircleMinus />
              </a>
              <span className="mx-2">{key.qnty}</span>
              <a href="#!" onClick={() => {dispatch(qntIncrese({ id: key.id }));}}>
                <FaPlusCircle />
              </a>
            </td>
            <td className="px-4 py-3">{key.prize * key.qnty}</td>
            <td className="px-4 py-3 text-center">
              <button
                onClick={() => {dispatch(dataRemove({ id: key.id }));}}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              > Remove</button>
            </td>
          </tr>
      </>
    )

    
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Cart</h1>

        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
          <FaRupeeSign className="text-gray-700" />
          <span className="text-lg font-semibold text-gray-800">
            {netAmount}
          </span>
        </div>
      </div>
          {/* Table */}
          <div className="overflow-x-auto bg-white border rounded-xl shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                <tr>
                  <th className="px-4 py-3">Sno</th>
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Product Name</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Quantity</th>
                  <th className="px-4 py-3">Total</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {Datacart}
              </tbody>
            </table>
          </div>

          {/* Checkout Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={() => navigate("/checkout")}
              className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow"
            >
              Checkout
            </button>
          </div>
          <hr />
    </div>
    
  );
};

export default Cartdata;
