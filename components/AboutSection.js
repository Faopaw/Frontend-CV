import classes from "./AboutSection.module.css";
import Image from "next/image";
import profilepic from "../public/eid-pic-selfie.jpg";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";

function AboutSection() {
  return (
    <section  className={classes.maincontainer}>
      <h1 id="about">About Me</h1>
      <div className={classes.content}>
        <div className={classes.aboutimage}>
          <Image
            alt="a decent picture of me"
            src={profilepic}
            height={400}
            width={400}
          />
        </div>
        <div className={classes.abouttext}>
          <p>
            {" "}
            Ever since I was a young child I had an interest in technology and
            its capabilities. my first experience with programming was with the
            Scratch programming language. It may seem like something
            insignificant but It may have been the thing that sparked my
            curiosity for technology, programming and its potential
            capabilities.
          </p>
          <p>
            {" "}
            Fast forward to the present and I am now a Frontend Developer. I
            have got here via online bootcamps and extra courses taken in my own time.
            I am hoping to land my first Frontend Developer job with a company
            who&apos;s values align with mine.
          </p>
          <div className={classes.socialslinks}>
            <IconContext.Provider
              value={{ size: "2em", className: classes.react_icons }}
            >
            <a href="https://github.com/Faopaw"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/idiris-omer/"><BsLinkedin /></a>
            <a href="https://twitter.com/Idiris_codes"><BsTwitter /></a>
              
              
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
