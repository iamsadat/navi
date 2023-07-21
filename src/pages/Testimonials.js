import React from "react";
// import pfp from "../assests/download.png";
import "../styles/Testimonials.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import ScrollAnimation from "../components/ScrollAnimation";
import { FaUserAlt } from "react-icons/fa";

const Testimonials = () => {
  return (
    <>
      <Navbar />
      <ScrollAnimation>
        <section className="client">
          <div className="section__container client__container">
            <ScrollAnimation>
              <h2 className="section__header">What our guests say</h2>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="client__grid">
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Devender Reddy</h4>
                  </div>
                  <p>
                    We had a great Team party at this farmhouse it absolutely
                    suits for all kind if events. Even we can celebrate large
                    party's upto 200 people easily. Good thing is amazing pool
                    and well maintained lawn. We were 40 people stayed overnight
                    and had an Cam fire, player cricket and many games.
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Durga</h4>
                  </div>
                  <p>
                    Its looks very neat,Spacious & luxury for affordable price.
                    Sufficient for people around 800 members for events. Best
                    place friends gathering, events, birthday functions. Had
                    much fun at box cricket pitch & they are enlarging the
                    pitch.
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Nainole Saikiran</h4>
                  </div>
                  <p>
                    If you are looking for a good farm house then this is the
                    best one. It has a swimming pool well neat maintained and
                    spacious garden comfortable place to stay with good
                    amenities. I highly recommend this farm house for special
                    occasions and gatherings.
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Sandeep Shandilya</h4>
                  </div>
                  <p>
                    Really good place for a weekend getaway. It has a very huge
                    garden which can accommodate up to 50 people for family
                    functions and get togethers. Totally worth it…
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Ranjith Reddy</h4>
                  </div>
                  <p>
                    One of the best place to celebrate events.Good service and
                    very well maintained rooms .
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Uday Reddy</h4>
                  </div>
                  <p>
                    Excellent farm house with good ambiance,spacious with good
                    facilities.. Suitable for all Parties and gatherings..
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Laxmikanth Reddy</h4>
                  </div>
                  <p>
                    Beautiful place to hangout with friends and family.Excellent
                    location
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Ajaykanth Reddy</h4>
                  </div>
                  <p>
                    Nice Place to chill with friends and family and make
                    memories 🙂
                  </p>
                </div>

                <div className="client__card">
                  <div className="user--info">
                    <FaUserAlt className="user--icon" />
                    <h4 className="user--name">Pampati Nikhil</h4>
                  </div>
                  <p>
                    The stay was awesome, no negatives reviews best place to
                    stay
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Testimonials;
