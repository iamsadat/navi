import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertySlider from "../components/PropertySlider";
import ScrollAnimation from "../components/ScrollAnimation";
import Whatsapp from "../components/Whatsapp";
import VideoSlider from "../components/VideoSlider";

import "../styles/PropertySlider.css";
import "../styles/Gallery.css";
import "../styles/VideoSlider.css";

import image1 from "../assets/photos/image1.jpg";
import image2 from "../assets/photos/image2.jpg";
import image3 from "../assets/photos/image3.jpg";
import image4 from "../assets/photos/image4.jpg";

import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";
import video5 from "../assets/videos/video5.mp4";
import video6 from "../assets/videos/video6.mp4";
import video7 from "../assets/videos/video7.mp4";
import video8 from "../assets/videos/video8.mp4";
import video9 from "../assets/videos/video9.mp4";
import video10 from "../assets/videos/video10.mp4";
import video11 from "../assets/videos/video11.mp4";

const Gallery = () => {
  const interiorImages = [image1, image2, image3, image4];

  const videos = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
    video10,
    video11,
  ];

  const kitchenImages = [
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/kitchen/IMG_8053.jpg?raw=true",
  ];

  const barCounterImages = [
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/bar-counter/IMG_8047.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/bar-counter/IMG_8076.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/bar-counter/2022-10-25%20(1).jpg",
  ];

  const lawnImages = [
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/lawn/IMG_8076.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/lawn/IMG_8126.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/lawn/IMG_8132.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/lawn/IMG_8136.jpg?raw=true",
  ];

  const poolImages = [
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/pool/IMG_8048.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/pool/IMG_8050.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/pool/IMG_8075.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/pool/IMG_8076.jpg?raw=true",
  ];

  return (
    <>
      <Navbar />
      <Whatsapp />
      <ScrollAnimation>
        <div className="gallery--container">
          <ScrollAnimation>
            <h3 className="gallery--title underlined-heading">
              Explore Our Gallery
            </h3>
          </ScrollAnimation>
          <ScrollAnimation>
            <p className="gallery--description">
              Immerse yourself in the captivating beauty of our farm stay
              through our carefully curated photo gallery. Each image captures
              the essence of our serene surroundings, charming accommodations,
              and the authentic farm experience we offer.
            </p>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="interiorImages-container">
              <PropertySlider images={interiorImages} />
            </div>
          </ScrollAnimation>
        </div>
        <div className="video--text">
          <h3 className="video--title underlined-heading">Videos</h3>
          <p className="video--description">
            Mesmerise your eyes with our beautiful Farm House
          </p>
        </div>
        <div className="player-wrapper">
          <VideoSlider videos={videos} />
        </div>
      </ScrollAnimation>
      <Footer />
    </>
  );
};

export default Gallery;
