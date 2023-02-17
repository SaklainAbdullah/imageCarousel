import { useState } from "react";
import "./index.css";

const images = [
  "img1.JPG",
  "img2.JPG",
  "img3.JPG",
  "img4.JPG"
];
/*const myStyle = { 
  "display": "block",
  "margin-left": "auto",
  "margin-right": "auto",
  "width" : "50%"
 
  }*/

export default function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div>
      <h2>Tour de Saint Martin</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img /*style={myStyle}*/ src={image} alt="images" />
              </div>
            )
        )}
      </div>
    </div>
  );
}
