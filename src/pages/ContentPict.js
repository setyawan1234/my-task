import React from 'react';
import { Slide } from 'react-slideshow-image';

// use plugin from react
import 'react-slideshow-image/dist/styles.css';
import "../styles/ContentPict.css";

// import image
import aboutbg from '../styles/img/about-bg.jpg'
import bg from '../styles/img/bg.jpg'

const slideContents = [
    { image: bg, 
      text: "THIS IS PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY"
    },
    { image: aboutbg, 
      text: "WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM" 
    },
  ];

export const ContentPict = () => {
  return (
    <div className="slideshow-container">
        <Slide>
          {slideContents.map((slide, index) => (
            <div key={index} className="each-slide">
              <div className="slide-image-container">
                <img className="slide-image" src={slide.image} alt={`Slide ${index + 1}`} />
                <span className="slide-text">{slide.text}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
  )
}
