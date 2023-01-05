import Image from "next/image";
import classes from "./MainSection.module.css";
import mainImage from "../public/ccchaos.svg";
import React, { useState, useEffect, Component } from "react";
import Typical from "react-typical";
import { DiReact } from "react-icons/di";
import { AiFillBug } from "react-icons/ai";

function MainSection() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("Count: " + count);
    setCount(1);
  }, [count]);

  return (
    <>
      <section className={classes.maincontainer}>
        <div className={classes.main}>
          <div className={classes.maintext}>
            Hi there, I am Idiris Omer and I am a
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
              "Bux fixer",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
          </div>

          
          <div className={classes.mainimage}>
            <Image
              alt="AI generated image of a wild wavy circular pattern"
              src={mainImage}
              height={500}
              width={500}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSection;
