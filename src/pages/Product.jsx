import { useState,useEffect } from 'react'
// import { motion } from 'framer-motion';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const Productdisplay = () => {
  const [data, setData] = useState({});
  const dispatach=useDispatch();
  const{id}=useParams();

  // Sample product data  

  const loaddata = async() => {
    const api = `http://localhost:3000/product/${id}`;
    const res = await axios.get(api);
    setData(res.data);
  }

  useEffect(() => {
    loaddata();
  }, []);


  return (
    <>
        <h1 className='text-center p-5 fs-1 bg-gray-300  h-50'>Our Product</h1>

      <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 flex max-auto flex-row items-center h-auto">
        <img className="w-full" src={data.img} alt="Product Image"/>
        <div className="px-6 py-4"> 
          <div className="font-bold text-xl mb-2 ">{data.name}</div>
          <p className="flex gap-2 font-medium text-gray-600 dark:text-gray-400 ">
            <span>Price:-</span>
            <span>{data.prize}</span>
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={()=>
            dispatach({type:"ADD",payload:{id:data.id,name:data.name,prize:data.prize,img:data.img}})
          }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  )
}

export default Productdisplay;