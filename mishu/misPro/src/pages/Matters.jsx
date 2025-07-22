import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import m1 from "../image/main/main-grid-01.jpg"
import m2 from "../image/main/main-grid-02.jpeg";
import m3 from "../image/main/main-grid-03.jpeg";
import m4 from "../image/main/main-grid-04.jpg";
import cent from "../image/main/Center-image-grid.png"
import img1 from "../image/slide/Web-Banner-001.png";
import img2 from "../image/slide/Web-Banner-002.png";
import img3 from "../image/slide/Web-Banner-003.png";

const Matters = () => {
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
    
    <section className='cont'>
      <div className='div1'>
        <div className='img-div'>
          <div className='s-div'><div className='d-head'>Cozy & snug For that plush feel</div></div>
          <div className='s-div1'><div className='d-head1'> Reversible</div></div>
        </div>
        <div className='s-div2'>
          <div className='b-div1'>  </div>
          </div>
        <div>
          <div><div>Back support</div></div>
          <div><div>No partner disturbanceoes</div></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Matters;