import React, { useRef, useState } from "react";
import "./style.css";
import { ThemeContext } from '../../context/theme';
import emailjs from '@emailjs/browser';
import { useContext } from "react";

function Contact() {
  const [done, setDone] = useState(false)
  const { darkMode } = useContext(ThemeContext);
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    for(let i =0; i<e.target.length; i++){
      if(e.target[i].value === ""){
        return false
      }
    }
    emailjs.sendForm('service_ph42l6b', 'template_tutz9pq', form.current, 'DLwse72Unj1VltFut')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode? 'white' : ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
        </form>
      </div>
    </div>
  );
}

export default Contact;
