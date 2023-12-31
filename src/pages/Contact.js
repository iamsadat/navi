import "../styles/Contact.css";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaRoad, FaPhone, FaEnvelope } from "react-icons/fa";
import Whatsapp from "../components/Whatsapp";
import ScrollAnimation from "../components/ScrollAnimation";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your own template ID and user ID from Email.js
    const templateId = "template_wvluzsr";
    const userId = "YOUR_USER_ID";

    // Send email using Email.js
    emailjs
      .send("default_service", templateId, formData, userId)
      .then((response) => {
        console.log("Email sent successfully!", response);
        // Reset the form data
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <Navbar />
      <Whatsapp />
      <ScrollAnimation>
        <div className="cbody">
          <div className="container">
            <h1 class="underlined-heading">
              <span></span>Contact Us
            </h1>
            <div className="wrapper animated bounceInLeft">
              <div className="company-info">
                <h3 className="company-info-title underlined-heading">
                  Navi Luxury Farm
                </h3>
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
                <form onSubmit={handleSubmit}>
                  <p>
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </p>
                  <p>
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </p>
                  <p>
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </p>
                  <p className="full">
                    <label>Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </p>
                  <p className="full">
                    <button type="submit">Submit</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <Footer />
      </ScrollAnimation>
    </>
  );
};

export default Contact;
