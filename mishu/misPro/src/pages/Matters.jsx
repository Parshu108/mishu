import React from 'react'
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
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={img2}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={img3}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Matters;