/*import React, { useRef } from 'react';
import "./HomePage.css";
import video from "../Assets/vegeta-ultra-ego.3840x2160.mp4";

export const HomePage = ({props,ref}) => {
  const eventsRef = useRef(null);

  return (
    <div>
      <div className="overlay">
        <div className="grid-container homepage">
          <div className="grid-item homepage-1-1">Section 1</div>
          <div className="grid-item homepage-1-2">Section 2</div>
          <div className="grid-item homepage-1-3">Section 3</div>
        </div>
      </div>

      <div className="homepage homepage-2">HomePage</div>
      <div ref={ref} className="homepage homepage-21"> 
        <ul>
          <li>🎉 Anime Convention - March 15, 2025</li>
          <li>🔥 Cosplay Contest - April 22, 2025</li>
          <li>⚡ Gaming Tournament - May 10, 2025</li>
          <li>🎶 J-Pop Concert - June 5, 2025</li>
        </ul>
      </div>

      <div className="homepage homepage-3">
        <video src={video} autoPlay loop muted className="video-bg"></video>
        <div className="overlay-text">HomePage</div>
      </div>
    </div>
  );
};*/

import React, { useRef, useState } from 'react';
import "./HomePage.css";
import video from "../Assets/vegeta-ultra-ego.3840x2160.mp4";

// Import your images
import event1 from "../Assets/Cosplay.png";
import event2 from "../Assets/Graffiti.png";

export const HomePage = ({ props, ref }) => {
  const eventsRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [event1, event2];

  // Function to navigate images
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="overlay">
        <div className="grid-container homepage">
          <div className="grid-item homepage-1-1">Section 1</div>
          <div className="grid-item homepage-1-2">Section 2</div>
          <div className="grid-item homepage-1-3">Section 3</div>
        </div>
      </div>

      <div className="homepage homepage-2">HomePage</div>

      {/* Events Section with Image Slider */}
      <div ref={ref} className="homepage homepage-21">
        <div className="events-container">
          {/* Event List */}
          {/* Image Slider */}
          <div className="image-slider">
            <button className="prev-btn" onClick={prevImage}>❮</button>
            <img src={images[currentImage]} alt="Event" className="slider-image" />
            <button className="next-btn" onClick={nextImage}>❯</button>
          </div>
        </div>
      </div>

      <div className="homepage homepage-3">
        <video src={video} autoPlay loop muted className="video-bg"></video>
        <div className="overlay-text">HomePage</div>
      </div>
    </div>
  );
};


