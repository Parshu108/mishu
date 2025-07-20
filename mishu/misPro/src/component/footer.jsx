import React from 'react'
import logo from "../image/Logo.png"; 
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const footer = () => {
  return (
    <>
      <footer className=" text-red d-block py-3 footerdata">
        <div className="container ">
          <ul className="list-block ">
            <a href="#" className="text-white"><img src={logo} style={{width:"20%",height:"80px" }} /></a>
            <div style={{marginTop:"10px"}} >
              <p style={{width:"350px"}}><CiLocationOn />
              <span style={{marginLeft:"10px",margintop:"10px"}}>Plot no- 911, Alang road, Opposite Pooja Weigh Bridge, Trapaj,
Bhavnagar, Gujarat 364150</span></p>
            </div>
            <div>
              <p>
              <MdOutlineMail />
              <span>
                info@mishumattress.com
              </span>
              </p>
            </div>
            <div>
              <p>
                <FiPhone />
                <span>
                +91 63521 09065
                </span>
              </p>
            </div>
            <div>
              <FiPhone />
              <FaFacebookF />
              <FaInstagram />
            </div>
          </ul>
        </div>
        <div className="container">
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#" className="text-white">Home</a></li>
            <li className="list-inline-item"><a href="#" className="text-white">Twitter</a></li>
            <li className="list-inline-item"><a href="#" className="text-white">Instagram</a></li>
          </ul>
        </div>
        <div className="container">
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#" className="text-white">Facebook</a></li>
            <li className="list-inline-item"><a href="#" className="text-white">Twitter</a></li>
            <li className="list-inline-item"><a href="#" className="text-white">Instagram</a></li>
          </ul>
        </div>
        <div className="container">
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#" className="text-white">Facebook</a></li>
            <li className="list-inline-item"><a href="#" className="text-white">Twitter</a></li>
            <li className="list-inline-item"><a href="#" className="text-white">Instagram</a></li>
          </ul>
        </div>
        <div className="container">
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#" className="text-white">Facebook</a></li>
            <li className="list-inline-item"><a href="#" className="text-white">Twitter</a></li>
            <li className="list-inline-item"><a href="#" className="text-white">Instagram</a></li>
          </ul>
        </div>
      </footer>
    </>

  )
}

export default footer