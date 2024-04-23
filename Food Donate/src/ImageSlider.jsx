// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './component/Assets/img1.jpg';
import img2 from './component/Assets/img2.jpg';
import img3 from './component/Assets/img3.png';
import './ImageSlider.css';

function DarkVariantExample() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={2000} data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1} // Replace with the path or URL of your first image
          alt="First slide"
          style={{ marginLeft: "auto", marginRight: "auto" }} // Set margin-left and margin-right to "auto"
        />
        <Carousel.Caption className="d-flex justify-content-center align-items-center h-100">
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2} // Replace with the path or URL of your second image
          alt="Second slide"
          style={{ marginLeft: "auto", marginRight: "auto" }} // Set margin-left and margin-right to "auto"
        />
        <Carousel.Caption className="d-flex justify-content-center align-items-center h-100">
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3} // Replace with the path or URL of your third image
          alt="Third slide"
          style={{ marginLeft: "auto", marginRight: "auto" }} // Set margin-left and margin-right to "auto"
        />
        <Carousel.Caption className="d-flex justify-content-center align-items-center h-100">
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
