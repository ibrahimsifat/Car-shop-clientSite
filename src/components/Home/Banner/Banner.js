import React from 'react';
import './Banner.css'
import  Navigation from  '../../shared/Navigation'


const Img1='https://i.ibb.co/qFcFcgQ/slider-3.png'
const Img2='https://i.ibb.co/4SVW68v/slider-1.png'
const Img3='https://i.ibb.co/jLzX0qL/slider-2.jpg'
const Img4='https://i.ibb.co/CHwDn4B/slider-4.jpg'
const Img5='https://i.ibb.co/xSB8sNh/slider-5.jpg'
const colors = [Img1,Img2,Img3,Img4,Img5];
const delay = 2500;

const Banner = () => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  
    return (
      <div className="slideshow">
      
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((source , index) => (
              <img  className="slide"
              key={index}
              src={source} alt="" />
          ))}
        </div>
  



        <div className="slideshowDots text-center">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
};

export default Banner;