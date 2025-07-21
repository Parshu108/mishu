import React from 'react'
import logo from "../image/Logo.png"; 
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

const footer = () => {
  return (
    <>
      <footer className=" text-red d-block py-3 footerdata">
        <div className="container ">
          <ul className="list-block footerdataul">
            <a href="#" className="text-white"><img src={logo} style={{width:"20%",height:"80px" }} /></a>
            <div  >
              <p style={{width:"50%"}} ><CiLocationOn />
              <span style={{marginLeft:"20px"}} >Plot no- 911, Alang road, Opposite {``} Pooja Weigh Bridge, Trapaj,
Bhavnagar, Gujarat 364150</span></p>
            </div>
            <div>
              <p>
              <MdOutlineMail />
              <span style={{marginLeft:"20px"}}>
                info@mishumattress.com
              </span>
              </p>
            </div>
            <div>
              <p>
                <FiPhone />
                <span style={{marginLeft:"20px"}}>
                +91 63521 09065
                </span>
              </p>
            </div>
            <div className='icon'>
              <FaFacebookF />
              <FaInstagram />
              <RiLinkedinFill />
            </div>
          </ul>
          <div className="miniul">
            <h5>Help</h5>
            <div className="under">
            <ul>
            <a href="#" >Privacy Policy</a>
            <a href="#" >Returns + Exchanges</a>
            <a href="#" >Shipping</a>
            <a href="#" >Terms & Conditions</a>
            <a href="#" >FAQ’s</a>
            </ul>
            </div>
          </div>
        </div>
      </footer>
    </>

  )
}

export default footer