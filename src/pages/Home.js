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
            Welcome to Navi Luxury Farms! Escape the hustle and bustle of city
            life and experience the tranquility of our charming farm rental.
            Nestled in a serene location, our farm stay offers a perfect getaway
            for a relaxing and rejuvenating experience.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            Immerse yourself in the natural beauty that surrounds our farm.
            Enjoy the picturesque landscapes, breathe in the fresh country air,
            and reconnect with nature. Whether you're seeking a peaceful retreat
            or an adventure-filled stay, A Creations Farm Stay has something to
            offer for everyone.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            Our farm rental provides a range of amenities to ensure a
            comfortable and enjoyable stay. Take a refreshing dip in the
            swimming pool or engage in water games to beat the heat. Unwind at
            the bar counter and savor a variety of drinks and cocktails prepared
            by our skilled bartenders. Experience the joy of outdoor grilling
            with our BBQ facilities and indulge in flavorful meals cooked with
            coal.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            As the sun sets, gather around the bonfire and create unforgettable
            memories with your loved ones. Explore the surroundings on
            complimentary bicycles or engage in friendly competition with a
            collection of board games available for your entertainment.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            Our well-equipped kitchen is at your disposal, complete with a gas
            stove, utensils, and crockery. Prepare your favorite meals using
            fresh ingredients and enjoy a homely dining experience.
            Additionally, a microwave and double door refrigerator are provided
            for your convenience.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            We understand the importance of uninterrupted comfort during your
            stay. In the event of a power outage, our generator ensures a
            seamless experience.
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <p>
            For parties and corporate events, we offer tailored packages to
            cater to your specific needs. With a capacity to accommodate up to
            100 guests, our farm stay provides a unique and picturesque venue
            for your special occasions.
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
              <div className="container--text">
                <h3 className="container--title">Interior</h3>
                <p className="container--description">
                  Step into our beautifully designed interior spaces that exude
                  comfort and charm. Every detail has been carefully crafted to
                  create a warm and inviting ambiance, ensuring a delightful
                  stay for our guests.
                </p>
              </div>
              <div className="interiorImages-container">
                <PropertySlider images={interiorImages} />
              </div>
              <div className="container--text">
                <h3 className="container--title">Pool</h3>
                <p className="container--description">
                  Dive into ultimate relaxation in our refreshing pool. Take a
                  dip to beat the heat, swim a few laps, or simply lounge by the
                  poolside while enjoying the tranquil surroundings. Our pool
                  area provides the perfect escape to rejuvenate and unwind.
                </p>
              </div>
              <div className="poolImages-container">
                <PropertySlider images={poolImages} />
              </div>
              <div className="container--text">
                <h3 className="container--title">Lawn</h3>
                <p className="container--description">
                  Our sprawling lawn offers a serene outdoor space where you can
                  relax and bask in the beauty of nature. Surrounded by lush
                  greenery, it's the perfect spot for a leisurely stroll, an
                  afternoon picnic, or simply unwinding with a good book.
                </p>
              </div>
              <div className="lawnImages-container">
                <PropertySlider images={lawnImages} />
              </div>
              <div className="container--text">
                <h3 className="container--title">Bar Counter Setup</h3>
                <p className="container--description">
                  Unwind and socialize at our well-equipped bar counter.
                </p>
              </div>
              <div className="barCounterImages-container">
                <PropertySlider images={barCounterImages} />
              </div>
              <div className="container--text">
                <h3 className="container--title">Kitchen</h3>
                <p className="container--description">
                  Our fully equipped kitchen is a haven for culinary
                  enthusiasts. Prepare your favorite meals using top-of-the-line
                  appliances, cookware, and utensils. Embrace your inner chef
                  and delight in creating delicious dishes that cater to your
                  personal tastes.
                </p>
              </div>
              <div className="kitchenImages-container">
                <PropertySlider images={kitchenImages} />
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
              Swimming Pool: Take a refreshing dip in our sparkling swimming
              pool. Enjoy a relaxing swim or engage in water games to make the
              most of your time.
            </li>
          </ScrollAnimation>
          <ScrollAnimation>
            <li>
              Bar Counter Setup: Unwind and socialize at our fully equipped bar
              counter. Enjoy a variety of drinks and cocktails prepared by our
              skilled bartenders.
            </li>
          </ScrollAnimation>
          <ScrollAnimation>
            <li>
              BBQ (Coal): Experience the joy of outdoor grilling with our BBQ
              facilities. Cook up delicious meals using coal and enjoy a
              flavorful dining experience.
            </li>
          </ScrollAnimation>
          <ScrollAnimation>
            <li>
              Bonfire: Gather around a cozy bonfire and create unforgettable
              memories. Please note that there is an additional charge of ₹1500
              for a two-hour bonfire session.
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
              Water Games in Swimming Pool: Dive into the fun with our exciting
              water games in the swimming pool. Engage in activities that
              promise laughter and entertainment.
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
              Microwave: Conveniently warm up snacks or heat leftovers using the
              microwave available in your accommodation.
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
              Generator: In the event of a power outage, our generator ensures
              uninterrupted electricity supply, allowing you to enjoy your stay
              without any disruptions.
            </li>
          </ScrollAnimation>
        </ul>
        <ScrollAnimation>
          <div class="contact---info">
            <ScrollAnimation>
              <p>For bookings and further inquiries, please contact us at:</p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>Phone: 9393031001, 9390058561</p>
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
                <a
                  href="https://goo.gl/maps/K98LdEaRfmiFGbgc6"
                  target="_blank"
                  rel="noreferrer"
                  className="directions--a"
                >
                  Get Directions
                </a>
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
                    <FaRoad /> : 6-29/121/P, Narkhuda, Shamsabad, Hyderabad,
                    Telangana 501218
                  </li>
                  <li>
                    <FaPhone /> : 9393031001 / 9390058561
                  </li>
                  <li>
                    <FaEnvelope /> : anupkumarheda@gmail.com
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
