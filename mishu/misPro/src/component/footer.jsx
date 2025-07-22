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
      {/* <footer className=" text-red d-block py-3 footerdata">
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
      </footer> */}

    <section >
      <div >
        <div className="footerdata">
            <div >
                <img  src={logo} style={{width:"40%",height:"80px",marginLeft:"30px" }} />
                <ul >
                    <li className="list" >
                        <a href="#" className="anch" >
                            <CiLocationOn  /> &nbsp;
                            Plot no- 911, Alang road, Opposite Pooja Weigh <br /> &nbsp;&nbsp; Bridge, Trapaj, Bhavnagar, Gujarat 364150
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" className="anch">
                            <MdOutlineMail  /> &nbsp;
                            info@mishumattress.com
                        </a>
                    </li>

                    <li className="list">
                        <a href="#" className="anch">
                            <FiPhone  /> &nbsp;
                            +91 63521 09065
                        </a>
                    </li>

                    <li className="list">
                        <a href="#" className="icon">
                            <FaFacebookF />
                            <FaInstagram />
                            <RiLinkedinFill />

                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <p style={{marginLeft:"30px",fontSize:"18px", fontWeight:"500"}}>Help</p>

                <ul >
                    <li className="list1">
                        <a href="#" title="" className="anch1">  Privacy Policy </a>
                    </li>

                    <li className="list1">
                        <a href="#" title="" className="anch1"> Returns + Exchanges </a>
                    </li>

                    <li className="list1">
                        <a href="#" title="" className="anch1"> Shipping </a>
                    </li>

                    <li className="list1">
                        <a href="#" title="" className="anch1"> Term & Condation</a>
                    </li>
                    <li className="list1">
                        <a href="#" title="" className="anch1">FAQ’s </a>
                    </li>
                </ul>
            </div>
            <div>
                <p style={{marginLeft:"30px",fontSize:"18px", fontWeight:"500"}} >Information</p>

                <ul >
                    <li className='list1'>
                        <a href="#" title="" className="anch1">  About Us </a>
                    </li>

                    <li className="list1">
                        <a href="#" title="" className="anch1"> Contact us </a>
                    </li>
                </ul>
            </div>
            <div>
                <p style={{marginLeft:"30px",fontSize:"18px", fontWeight:"500"}}>Useful Link</p>

                <ul >
                    <li className="list1">
                        <a href="#" title="" className="anch1"> B2B Enquiry </a>
                    </li>

                    <li className="list1">
                        <a href="#" title="" className="anch1"> Store Locator </a>
                    </li>

                    <li className="list1">
                        <a href="#" title="" className="anch1"> Our Story </a>
                    </li>

                    <li className="list1">
                        <a href="#" title="" className="anch1"> Contact Us </a>
                    </li>
                    <li className="list1">
                        <a href="#" title="" className="anch1"> Latest News</a>
                    </li>
                </ul>
            </div>

            <div >
              <h5>Newslatter Signup</h5>
                <p >Subscribe to our newsletter and get 10% off your first purchase</p>

                <form action="#" method="POST" >
                    <div>
                        <input type="email" name="email" id="email" placeholder="Enter your email"  />
                        
                    </div>
                    <button type="submit" id="btn" >Subscribe</button>
                </form>
            </div>
        </div>

        <hr  />

        <p className="para">© Copyright 2021, All Rights Reserved by Postcraft</p>
    </div>
</section>

 
    </>

  )
}

export default footer