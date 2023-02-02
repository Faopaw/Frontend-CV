import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import classes from "./ContactUs.module.css";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


export const ContactUs = () => {
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  const form = useRef();
  const templateparams = {
    'g-recaptcha-response' : '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "RZ2drz7h2D_Eb1G__",
        {
          'g-recaptcha-response' : '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
        }
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message has been sent', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        },
        (error) => {
          console.log(error.text);
          toast.error('Error, message not sent', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
      );
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section id="contact" className={classes.section}>
        <form className={classes.form} ref={form} onSubmit={sendEmail}>
          <h2>Contact Me</h2>
          {/* <label>Name</label> */}
          <input
            className={classes.usernameinput}
            name="user_name"
            type="text"
            placeholder="Enter Name..."
          />
          {/* <label>Email</label> */}
          <input
            className={classes.useremailinput}
            name="user_email"
            type="email"
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
          <div class="g-recaptcha" data-sitekey="6LcMs0AkAAAAAEQEv0nGTMhE39xuIbVyJlTaMZlA"></div>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
