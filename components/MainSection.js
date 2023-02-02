import Image from "next/image";
import classes from "./MainSection.module.css";
import mainImage from ".//../public/dddepth-088.jpg";
import React, { useState, useEffect, Component } from "react";
import Typical from "react-typical";
import NavbarComponent from "../components/navbar";

function MainSection() {
  const style = {
    borderRadius : "2rem",
    boxShadow: "0 0 50px 50px white inset",
    position: "absolute",
    top:0,
    left:0
  }

  const styleblur = {
    borderRadius : "2rem",
    boxShadow: "0 0 50px 50px white inset",
    "WebkitFilter": "blur(20px)",
    "Mozfilter": "blur(20px)",
    "OFilter": "blur(20px)",
    "msFilter": "blur(20px)",
    filter: "blur(30px)",
    "zindex" : "-99",
    top:0,
    left:0
  }

  // useEffect(() => {
  //   console.log("Count: " + count);
  //   setCount(1);
  // }, [count]);

  return (
    <>
    <NavbarComponent/>
      <section id="home" className={classes.maincontainer}>
        <div className={classes.main}>
          <div className={classes.maintext}>
            Hi there, I am <span className={classes.myname}>Idiris Omer</span>,
            <br></br>
            <Typical
            steps={[
              "Frontend Developer",
              1000,
              "Web Engineer",
              1000,
              "Open Source Contributor",
              1000,
              "React Developer",
              1000,
              "Bug fixer",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
          </div>

          
          <div className={classes.mainimage}>
            <Image
              data-testid="image"
              style={styleblur}
              alt="AI generated image of a wild wavy circular pattern"
              src= {mainImage}
              height={400}
              width={400}
              priority
            />
            <Image
              style={style}
              alt="AI generated image of a wild wavy circular pattern"
              src= {mainImage}
              height={400}
              width={400}
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSection;
