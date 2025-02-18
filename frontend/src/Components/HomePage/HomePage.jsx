import React from 'react'
import "./HomePage.css"
import video from "../Assets/vegeta-ultra-ego.3840x2160.mp4"
export const HomePage = () => {
  return (
    <div>
      <div class="overlay">
    <div class="grid-container homepage">
    <div class="grid-item homepage-1-1">Section 1</div>
    <div class="grid-item homepage-1-2">Section 2</div>
    <div class="grid-item homepage-1-3">Section 3</div>
      </div>
      </div>
    <div className='homepage homepage-2'>HomePage</div>
    <div className="homepage homepage-3">
        <video src ={video} autoPlay loop muted className="video-bg">
        </video>
        <div className="overlay-text">HomePage</div>
      </div>
    {/* <div className='homepage homepage-3'>HomePage</div>
    <div className='homepage homepage-4'>HomePage</div>
    <div className='homepage homepage-5'>HomePage</div> */}
    </div>
  )
}
