import { Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
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
  const loaddata = async () => {
      const api = "http://localhost:3000/product";
      const res = await axios.get(api);
      setdata(res.data);
  }
  useEffect(() => {
    loaddata();
  }, []);

  const ans=mydata.map((key)=>{
    return (
      <>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={key.img} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text style={{fontSize:"15px",color:"black",fontWeight:"500"}}>
          <RiMoneyRupeeCircleLine style={{fontSize:"18px"}} />:{key.prize}
        </Card.Text>
      </Card.Body>
    </Card>
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
      <div style={{display:"block",flexWrap:"wrap",justifyContent:"space-around",marginTop:"20px"}}>
          <div style={{display:"flex",justifyContent:"space-around",marginBottom:"20px",textAlign:"center",width:"50%",marginLeft:"25%"}}>
            <li className='li-d'><button className='li-d-button'> Best Seller</button></li>
            <li className='li-d'><button className='li-d1-button'>Orth Mattress</button></li>
            <li className='li-d'><button className='li-d1-button'>New Launches</button></li>
          </div>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginTop:"20px"}}>
          {ans}
        </div>
      </div>
    </section>
    <section style={{backgroundColor:"#f8f9fa",padding:"50px 0"}}>
      <div>
        <div style={{textAlign:"center",marginBottom:"30px",padding:"0 20px",margin:"10px"}}>
          <h1 style={{fontSize:"30px",fontWeight:"500",color:"#3e5a7cff"}}>Our Premium Mattresses Redefine Sleep Quality</h1>
          <p style={{textAlign:"center",width:"60%",margin:"0 auto",color:"#2d2d2eff",fontSize:"20px",lineHeight:"1.6",marginTop:"20px"
          }}>At Mishu, we believe that a good day begins with a great night's sleep. As a premium mattress brand, we are dedicated to redefining sleep quality with products that combine comfort, durability, and innovation. Whether you're looking to upgrade your home bedroom or furnish an entire hotel, our wide range of mattresses caters to every need.</p>
          <button className='s-button'>READ OUR STORY</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Matters;