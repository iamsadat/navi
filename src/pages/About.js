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
              <h1 className="underlined-heading">Navi Luxury Farm</h1>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                Welcome to Navi Luxury Farm! Escape the hustle and bustle of
                city life and experience the tranquility of our charming farm
                rental. Nestled in a serene location, our farm stay offers a
                perfect getaway for a relaxing and rejuvenating experience.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                Immerse yourself in the natural beauty that surrounds our farm.
                Enjoy the picturesque landscapes, breathe in the fresh country
                air, and reconnect with nature. Whether you're seeking a
                peaceful retreat or an adventure-filled stay, Navi Luxury Farm
                has something to offer for everyone.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                Our farm rental provides a range of amenities to ensure a
                comfortable and enjoyable stay. Take a refreshing dip in the
                swimming pool or engage in water games to beat the heat. Unwind
                at the bar counter and savor a variety of drinks and cocktails
                prepared by our skilled bartenders. Experience the joy of
                outdoor grilling with our BBQ facilities and indulge in
                flavorful meals cooked with coal.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                As the sun sets, gather around the bonfire and create
                unforgettable memories with your loved ones. Explore the
                surroundings on complimentary bicycles or engage in friendly
                competition with a collection of board games available for your
                entertainment.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                Our well-equipped kitchen is at your disposal, complete with a
                gas stove, utensils, and crockery. Prepare your favorite meals
                using fresh ingredients and enjoy a homely dining experience.
                Additionally, a microwave and double door refrigerator are
                provided for your convenience.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                We understand the importance of uninterrupted comfort during
                your stay. In the event of a power outage, our generator ensures
                a seamless experience.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                For parties and corporate events, we offer tailored packages to
                cater to your specific needs. With a capacity to accommodate up
                to 100 guests, our farm stay provides a unique and picturesque
                venue for your special occasions.
              </p>
            </ScrollAnimation>
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
                  Sparkling Swimming Pool:
                  Take a dip and unwind in our pristine swimming pool. Whether you're looking to cool off on a sunny day or simply wish to indulge in some leisurely water activities, our spacious pool area offers the perfect spot to relax and rejuvenate.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Thrilling Box Cricket Pitch:
                  For all the cricket enthusiasts out there, NLF presents an exciting box cricket pitch that guarantees endless hours of fun and competitive play. Gather your friends and family for thrilling matches and create lasting memories on the field.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Movie Nights Under the Stars:
                  Experience the magic of outdoor cinema with our state-of-the-art projector setup. Gather around with your loved ones, lie back under the starry night sky, and immerse yourself in your favorite movies or catch the latest blockbusters in a unique and enchanting setting.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Lush Green Lawn:
                  Our picturesque lawn, meticulously manicured and surrounded by lush greenery, offers a perfect setting for various activities and leisurely strolls. It's an ideal space to host outdoor events, play games, or simply enjoy the beauty of nature.
                </li>
              </ScrollAnimation>
              <ScrollAnimation>
                <li>
                  Cozy Bonfire Area:
                  As the evening sets in, gather around the warm and inviting bonfire area. Share stories, laughter, and create heartwarming memories with your friends and family as you embrace the crackling flames and soothing ambiance.
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
