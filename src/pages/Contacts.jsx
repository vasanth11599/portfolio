import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import contactImage from "../assets/illustration.jpg"; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tdrfg6j",   
        "template_5f184fg",  
        formData,
        "BZxFHkya1BOpkCtKH"    
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact-container">

      <div className="contact-image">
        <img src={contactImage} alt="Contact Illustration" />
       </div>
     
      <div className="contact-form">
        <h2>Contact us</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} 
            required
          />
          <input
            type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email}
            required
          />
          <textarea
            name="message" placeholder="Message" onChange={handleChange} value={formData.message}
            required
          ></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </div>
  );
}
