import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";
import Whatsapp from "../components/Whatsapp";
import ScrollAnimation from "../components/ScrollAnimation";
import VideoSlider from "../components/VideoSlider";

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

const About = () => {
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
  return (
    <>
      <Navbar />
      <Whatsapp />
      <ScrollAnimation>
        <ScrollAnimation>
          <div class="container---">
            <div className="player-wrapper">
              <VideoSlider videos={videos} />
            </div>
            <ScrollAnimation>
              <h1 className="underlined-heading">AMENITIES</h1>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                We take pride in offering a wide range of amenities to make your
                experience enjoyable and memorable. Here is a list of amenities
                available:
              </p>
            </ScrollAnimation>
            <ul class="amenities-list">
              <ScrollAnimation>
                <li>
                  Swimming Pool: Take a refreshing dip in our sparkling swimming
                  pool. Enjoy a relaxing swim or engage in water games to make
                  the most of your time.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Bar Counter Setup: Unwind and socialize at our fully equipped
                  bar counter. Enjoy a variety of drinks and cocktails prepared
                  by our skilled bartenders.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  BBQ (Coal): Experience the joy of outdoor grilling with our
                  BBQ facilities. Cook up delicious meals using coal and enjoy a
                  flavorful dining experience.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Bonfire: Gather around a cozy bonfire and create unforgettable
                  memories. Please note that there is an additional charge of
                  ₹1500 for a two-hour bonfire session.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Cycling: Explore the surroundings on two wheels with our
                  complimentary cycling facilities. Discover the area's scenic
                  beauty while enjoying a leisurely ride.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Water Games in Swimming Pool: Dive into the fun with our
                  exciting water games in the swimming pool. Engage in
                  activities that promise laughter and entertainment.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Board Games: Spend quality time indoors with our collection of
                  board games. Challenge your friends and family to a friendly
                  competition.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Kitchen: Our well-equipped kitchen is at your disposal. It
                  includes a gas stove, utensils, and crockery, allowing you to
                  prepare your favorite meals during your stay.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Microwave: Conveniently warm up snacks or heat leftovers using
                  the microwave available in your accommodation.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Double Door Refrigerator: Store your food and beverages in our
                  spacious double door refrigerator. Keep your items fresh and
                  easily accessible.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Generator: In the event of a power outage, our generator
                  ensures uninterrupted electricity supply, allowing you to
                  enjoy your stay without any disruptions.
                </li>
              </ScrollAnimation>
            </ul>
            <ScrollAnimation>
              <div class="contact---info">
                <ScrollAnimation>
                  <p>
                    For bookings and further inquiries, please contact us at:
                  </p>
                  <p>Phone: 8008929237</p>
                </ScrollAnimation>
                <ScrollAnimation>
                  <h1 className="underlined-heading">LOCATION</h1>
                </ScrollAnimation>
                <ScrollAnimation>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.8396264919943!2d78.38048757427228!3d17.226567607419913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbb9f5ace2ed93%3A0x15626a7a17d570fc!2sNavi%20Farm%20House!5e0!3m2!1sen!2sin!4v1689886071627!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="map"
                  ></iframe>
                </ScrollAnimation>
                <ScrollAnimation>
                  <h3 className="directions">
                    <Link
                      to="https://goo.gl/maps/K98LdEaRfmiFGbgc6"
                      target="_blank"
                    >
                      Get Directions
                    </Link>
                  </h3>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
        <Footer />
      </ScrollAnimation>
    </>
  );
};

export default About;
