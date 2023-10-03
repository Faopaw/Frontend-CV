import Image from "next/image";
import classes from "./MainSection.module.css";
import mainImage from ".//../public/undraw_programming_re_kg9v.svg";

import React, { useState, useEffect, Component } from "react";
import Typewriter from "typewriter-effect";

function MainSection() {
  const style = {
    borderRadius: "3rem",
  };

  return (
    <>
      <section id="home" className={classes.maincontainer}>
        <div className={classes.main}>
          <div className={classes.maintext}>
            Hi there, I am <span className={classes.myname}>Idiris Omer</span>,
            <br></br>
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Bug finder",
                  "React Developer",
                  "Looking for a job",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            <p className={classes.leadingtext}>
              {/* I am a Front End developer with experience building websites and
              web apps. I specialize in frontend technologies such as
              JavaScript, React & Next.js. Currently working with Next.js and
              working on projects. */}
              Welcome to my website! I&apos;m a seasoned Front End developer with a
              passion for crafting exceptional websites and web applications. My
              expertise lies in frontend technologies, with a strong focus on
              JavaScript, React, and Next.js.
            </p>
            <button href="#about" className={classes.mainButton}>
              <a className={classes.mainButtonText} href="#about">
                Find out more!
              </a>
            </button>
            <button href="#about" className={classes.mainButton}>
              <a className={classes.mainButtonText} href="/resume.pdf">
                Resume
              </a>
            </button>
          </div>
          <div className={classes.mainimage}>
            <Image
              data-testid="image"
              style={style}
              alt="AI generated image of a wild wavy circular pattern"
              src={mainImage}
              height={500}
              width={500}
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSection;
