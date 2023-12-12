import classes from "./AboutSection.module.css";
import Image from "next/image";
import profilepic from "../public/eid-pic-selfie.jpg";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";

function AboutSection() {
  const picstyle = {
    borderRadius: "25px",
    width: "auto",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
  };

  return (
    <section id="about" className={classes.maincontainer}>
      <h1 className={classes.about}>About Me</h1>
      <div className={classes.content}>
        <div className={classes.aboutimagecontainer}>
          <Image
            style={picstyle}
            alt="a decent picture of me"
            src={profilepic}
          />
        </div>

        <div className={classes.abouttext}>
          <p>
            {" "}
            From a young age, I&apos;ve been captivated by technology and its
            boundless possibilities. My journey into the world of programming
            began with Scratch, igniting my passion for technology and coding.
          </p>
          <p>
            {" "}
            Today, I proudly stand as a Frontend Developer, refining my craft
            through certified bootcamps and dedicated self-study. I am eagerly
            seeking my first opportunity in a Frontend Developer role, aspiring
            to join a company that shares my values and vision.
          </p>
          <h3 className={classes.skills}>Skills</h3>
          <div className={classes.techskills}>
            <ul className={classes.listcontainer}>
              <li className={classes.listitem}>HTML5</li>
              <li className={classes.listitem}>CSS3</li>
              <li className={classes.listitem}>JavaScript / ES6</li>
              <li className={classes.listitem}>React.js</li>
              <li className={classes.listitem}>TypeScript</li>
              <li className={classes.listitem}>Node.js</li>
              <li className={classes.listitem}>Next.js</li>
            </ul>
          </div>
          <div className={classes.socialslinks}>
            <IconContext.Provider
              value={{ size: "2em", className: classes.react_icons }}
            >
              <a href="https://github.com/Faopaw">
                <BsGithub />
              </a>
              <a href="https://www.linkedin.com/in/idiris-omer/">
                <BsLinkedin />
              </a>
              <a href="https://twitter.com/Idiris_codes">
                <BsTwitter />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
