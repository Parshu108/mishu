import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


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
    
    </>
  )
}

export default Matters;