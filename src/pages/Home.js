import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "../styles/Contact.css";
import { FaRoad, FaPhone, FaEnvelope } from "react-icons/fa";
import PropertySlider from "../components/PropertySlider";
import "../styles/About.css";
import "../styles/PropertySlider.css";
import "../styles/Gallery.css";
import Whatsapp from "../components/Whatsapp";
import ScrollAnimation from "../components/ScrollAnimation";

import image1 from "../assets/photos/image1.jpg";
import image2 from "../assets/photos/image2.jpg";
import image3 from "../assets/photos/image3.jpg";
import image4 from "../assets/photos/image4.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const interiorImages = [image1, image2, image3, image4];

  const kitchenImages = [
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/kitchen/IMG_8053.jpg?raw=true",
  ];

  const barCounterImages = [image2, image3, image1, image4];

  const lawnImages = [image4, image2, image3, image1];

  const poolImages = [image3, image4, image2, image1];
  return (
    <>
      <Navbar />
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>
      <Whatsapp />
      <div class="container---">
        <ScrollAnimation>
          <h1>Navi Luxury Farms</h1>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            Welcome to Navi Luxury Farmhouse: Your Exquisite Retreat for Memorable Staycations and Unforgettable Celebrations!
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            Discover the Ultimate Getaway:
            Nestled amidst nature's embrace, Navi Luxury Farmhouse offers an unrivaled escape from the hustle and bustle of everyday life. Whether you seek a serene staycation with your loved ones or wish to host a joyous celebration, our farmhouse provides the perfect backdrop for your dreams to come true.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            Luxury Redefined:
            Step into a world of opulence as you enter our stunning farmhouse. Experience a seamless blend of modern amenities and rustic charm, designed to elevate your comfort to new heights. From plush furnishings to thoughtfully curated decor, every corner exudes a sense of luxury and sophistication.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            A Staycation Haven:
            Experience relaxation like never before in our well-appointed accommodation. Indulge in the cozy ambiance of our beautifully decorated rooms, each offering a serene view of the surrounding landscape. Rejuvenate your senses as you wake up to the sounds of nature and bask in the warm sunlight filtering through the curtains.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            Host Your Celebrations:
            At Navi Luxury Farmhouse, we believe that every celebration should be nothing short of extraordinary. Our sprawling lawn, exquisitely manicured and adorned with vibrant blooms, serves as the perfect setting for your special occasions. Whether it's a birthday bash, a family reunion, or any other event, our dedicated team will ensure that your celebration is flawlessly executed, leaving you with cherished memories to last a lifetime.

          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            Dive into Bliss:
            A shimmering oasis awaits you at our swimming pool, inviting you to take a refreshing dip or simply unwind by the water's edge. Soak up the sun on comfortable loungers or enjoy a poolside barbecue with your friends and family - the choice is yours!
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            Explore Nature's Bounty:
            As the sun sets, take leisurely walks amidst the verdant surroundings and embrace the tranquility of the countryside. Let the cool breeze kiss your cheeks as you relish the beauty of a starlit sky, far away from the city's bright lights.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            Your Dream Getaway Awaits:
            Whether it's a peaceful staycation or a grand celebration, Navi Luxury Farmhouse promises an unforgettable experience for you and your loved ones. Come, escape to a world of luxury and delight in a home away from home.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            Book your stay or event now and embark on an extraordinary journey with us at Navi Luxury Farmhouse - where cherished memories are made, and dreams come to life.
          </p>
        </ScrollAnimation>
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
              <p>For bookings and further inquiries, please contact us at:</p>
            </ScrollAnimation>
            <ScrollAnimation>
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
      <ScrollAnimation>
        <div className="cbody">
          <div className="container">
            <h1 className="brand underlined-heading">
              <span></span>Contact Us
            </h1>
            <div className="wrapper animated bounceInLeft">
              <div className="company-info">
                <h3 className="company-info-title">Navi Luxury Farms</h3>
                <ul>
                  <li>
                    <FaRoad /> : Shamshabad, Hyderabad, Telangana 501218
                  </li>
                  <li>
                    <FaPhone /> : 8008929237
                  </li>
                  <li>
                    <FaEnvelope /> : xxxxx@gmail.com
                  </li>
                </ul>
              </div>
              <div className="contact">
                <form>
                  <p>
                    <label>Name</label>
                    <input type="text" name="name" />
                  </p>
                  <p>
                    <label>Email Address</label>
                    <input type="email" name="email" />
                  </p>
                  <p>
                    <label>Phone Number</label>
                    <input type="text" name="phone" />
                  </p>
                  <p className="full">
                    <label>Message</label>
                    <textarea name="message" rows="5" />
                  </p>
                  <p className="full">
                    <button>Submit</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <Footer />
    </>
  );
};

export default Home;
