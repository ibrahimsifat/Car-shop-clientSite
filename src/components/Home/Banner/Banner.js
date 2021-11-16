import React from 'react';
import './Banner.css'





const Img1='https://i.ibb.co/XDV5Lyy/New-Project-3.jpg'
const Img2='https://i.ibb.co/M5yPsMV/New-Project.jpg'
const Img3='https://i.ibb.co/Bg7kmMJ/New-Project-1.jpg'
const Img4='https://i.ibb.co/WFMD4SN/New-Project-2.jpg'

const colors = [Img1,Img2,Img3,Img4];
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