import { Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import m1 from "../image/main/main-grid-01.jpg"
import m2 from "../image/main/main-grid-02.jpeg";
import m3 from "../image/main/main-grid-03.jpeg";
import m4 from "../image/main/main-grid-04.jpg";
import cent from "../image/main/Center-image-grid.png"
import img1 from "../image/slide/Web-Banner-001.png";
import img2 from "../image/slide/Web-Banner-002.png";
import img3 from "../image/slide/Web-Banner-003.png";
import axios from 'axios';

const Matters = () => {
  // Fetching data from the API
  const [mydata, setdata] = useState([]);
  const Navigate=useNavigate();
  const loaddata = async () => {
      const api = "http://localhost:3000/product";
      const res = await axios.get(api);
      setdata(res.data);
  }
  useEffect(() => {
    loaddata();
  }, []);

  const product=(id)=>{
    Navigate(`/productdisplay/${id}`);
  }

  const ans=mydata.map((key)=>{
    return (
      <>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <a href="" onClick={()=>product(key.id)}>
            <img className="aspect-square w-full rounded-lg bg-gray-400 object-cover group-hover:opacity-75 xl:aspect-7/8" src={key.img} alt="Sunset in the mountains"/>
          </a>
          
         <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ">{key.name}</div>
            <p className="flex gap-2 font-medium text-gray-600 dark:text-gray-400 ">
              <span><RiMoneyRupeeCircleLine  /></span>
              <span>:-</span>
              <span className='mt-1 text-lg font-medium text-gray-900'>{key.prize}</span>
            </p>
          </div>
        </div>
        
      </>
      
    );
  }) 
  return (
    <>
        
     <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          src={img1} style={{height:`600px`,width:`100%` }}
        />
        <Carousel.Caption >
          <div className="text">
            <h5 >Mishu Matters</h5>
          <h1>VINTAGE MATTERS</h1>
          <p style={{textDecoration:"italick"}}>Comfort jo sabhkuch bhulade</p>
          <Button>Explore Now</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={img2}
        />
        <Carousel.Caption>
          <div className="text">
            <h5 >Mishu Matters</h5>
          <h1>DREAM CATCHER MATTERS</h1>
          <p>neend bhi pyar bhi</p>
          <Button>Explore Now</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={img3}
        />
        <Carousel.Caption>
          <div className="text">
            <h5 >Mishu Matters</h5>
          <h1>ASTRON MATTERS</h1>
          <p>jahan neend ho khwabon jaisi</p>
          <Button>Explore Now</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     
     <div className='matters'>
      <div className='bg-div'><h5 className='head'><span>FREE SHIPPING</span> ALL ORDER OVER</h5></div>
      <div className='bg-div'><h5 className='head'>SUMMER <span>SALE OF</span> TO 50%</h5></div>
      <div className='bg-div'><h5 className='head'>WE SUPPORT <span>24 HOURS</span> A DAY</h5></div>
     </div>

    <CardGroup>
      <Card>
        <Card.Img variant="top" src={m1} style={{width:"80%",height:"100%",marginLeft:"20px"}} />
        <Card.Body>
          <Card.Title className='d-head'> Cozy & snug For that plush feel</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={m3} style={{width:"80%",height:"100%",marginLeft:"20px"}} />
        <Card.Body>
          <Card.Title className='d-head1'> Reversible</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={cent} style={{width:"100%",height:"100%"}} />
      </Card>
      <Card>
        <Card.Img variant="top" src={m2} style={{width:"80%",height:"100%",marginLeft:"70px"}} />
        <Card.Body>
          <Card.Title className='d-head2'> Back support</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={m4} style={{width:"80%",height:"100%",marginLeft:"70px"}} />
        <Card.Body>
          <Card.Title className='d-head3'>No partner disturbanceoes</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>

    <section>
      <div>
      <h1 className='text-center mt-5 fs-2'> SHOP BY CATEGORY</h1>
      <div className='d-flex justify-content-center'>
        <p className='text-center w-50'>Best Collection of Comfortable Mattress</p>
      </div>
    </div>
      <div  className='block flex-wrap justify-content-around mt-3'>
          <div  className='flex justify-content-around mb-3 text-center w-50 ml-auto mr-auto'>
            <li className='li-d'><button className='li-d-button'> Best Seller</button></li>
            <li className='li-d'><button className='li-d1-button'>Orth Mattress</button></li>
            <li className='li-d'><button className='li-d1-button'>New Launches</button></li>
          </div>
        <div  className='grid grid-cols-4 gap-4 mt-4 p-4'>
          {ans}
        </div>
      </div>
    </section>
    <section  className='bg-gray-200 p-4'>
      <div>
        <div  className='text-center mb-5 p-4 m-2'>
          <h1 style={{color:"#3e5a7cff"}} className='fs-1 fw-bold'>Our Premium Mattresses Redefine Sleep Quality</h1>
          <p  className='text-center w-3xl m-auto fs-5 mt-5 lh-base'>At Mishu, we believe that a good day begins with a great night's sleep. As a premium mattress brand, we are dedicated to redefining sleep quality with products that combine comfort, durability, and innovation. Whether you're looking to upgrade your home bedroom or furnish an entire hotel, our wide range of mattresses caters to every need.</p>
          <button className='s-button'>READ OUR STORY</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Matters;