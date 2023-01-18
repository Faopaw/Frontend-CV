import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import classes from "./ContactUs.module.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "RZ2drz7h2D_Eb1G__"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className={classes.section}>
    
      <form className={classes.form} ref={form} onSubmit={sendEmail}>
      <h2>Contact Us</h2>
        {/* <label>Name</label> */}
        <input
          className={classes.usernameinput}
          type="text"
          name="user_name"
          placeholder="Enter Name..."
        />
        {/* <label>Email</label> */}
        <input
          className={classes.useremailinput}
          type="email"
          name="user_email"
          placeholder="Enter Email..."
        />
        {/* <label>Message</label> */}
        <textarea
          className={classes.usermessageinput}
          name="message"
          placeholder="Enter Message here..."
          rows={5}
          cols={33}
        />
        <input className={classes.submitbutton} type="submit" value="Send" />
      </form>
    </section>
  );
};

export default ContactUs;
