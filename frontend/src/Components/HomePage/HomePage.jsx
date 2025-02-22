import React, { useRef } from "react";
import "./HomePage.css";
import video from "../Assets/vegeta-ultra-ego.3840x2160.mp4";
import Navbar from "../Navbar/Navbar";
import CategoryCard from "../CategoryCard/CategoryCard";
import stickersImage from "../Assets/zu9bj_512.jpg";
import postersImage from "../Assets/71F-fgJ8+HL._AC_UF1000,1000_QL80_.jpg";
import figurinesImage from "../Assets/images.jpg";
export const HomePage = () => {
  const eventsRef = useRef(null);
  const aboutUsRef = useRef(null);
  const recomm = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Reference is undefined:", ref);
    }
  };

  return (
    <div>
      <Navbar
        scrollToSection={scrollToSection}
        eventsRef={eventsRef}
        aboutUsRef={aboutUsRef}
        recomm={recomm}
      />

      {/* Main Sections */}
      <div className="overlay">
        <div className="grid-container homepage">
          <div className="grid-item homepage-1-1">Section 1</div>
          <div className="grid-item homepage-1-2">Section 2</div>
          <div className="grid-item homepage-1-3">Section 3</div>
        </div>
        <div className="transparent-box">
  <p className="p1">NECESSITIES AT FINGERTIPS</p>
  <h1>ANIMYU</h1>
  <p className="p2">ONE STOP DESTINATION</p>
</div>

      </div>

      <div ref={eventsRef} className="homepage homepage-2">
      <div className="category-wrapper">
      <a href="#" className="p3">BUY OUR MERCHANDISE</a>
      <div className="category-container">
        <CategoryCard image={stickersImage} title="STICKERS" path="/stickers" />
        <CategoryCard image={postersImage} title="POSTERS" path="/posters" />
        <CategoryCard image={figurinesImage} title="FIGURINES" path="/figurines" />
      </div>
      </div>
      </div>

      {/* About Us Section */}
      <div ref={aboutUsRef} className="homepage homepage-4">
        <video src={video} autoPlay loop muted className="video-bg"></video>
        <div className="overlay-text">AboutUs</div>
      </div>
    </div>
  );
};
