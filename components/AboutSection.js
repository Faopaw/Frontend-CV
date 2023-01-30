import classes from "./AboutSection.module.css";
import Image from "next/image";
import profilepic from "../public/eid-pic-selfie.jpg";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";

function AboutSection() {
  const picstyle = {
    borderRadius: "10%",
    objectFit: "contain",
    objectPosition: "center",
    // sizes: "(max-width: 500px) 70vw,(max-width: 1000px) 33vw",
    // layout: "intrinsic"
  };

  return (
    <section className={classes.maincontainer}>
      <h1 id="about" className={classes.about}>
        About Me
      </h1>
      <div className={classes.content}>
        <div className={classes.aboutimagecontainer}>
            <Image
              style={picstyle}
              alt="a decent picture of me"
              src={profilepic}
              fill
              sizes= "(max-width: 500px) 90vw,(max-width: 1000px) 50vw"
            />
        </div>

        <div className={classes.abouttext}>
          <p>
            {" "}
            Ever since I was a young child I had an interest in technology and
            its capabilities. My first experience with programming was with the
            Scratch programming language. It was the thing that sparked my
            curiosity for technology, programming and its limitless potential
            capabilities.
          </p>
          <p>
            {" "}
            Fast forward to the present, I am now a Frontend Developer. I have
            got here via online bootcamps and extra courses taken in my own
            time. I am hoping to land my first Frontend Developer job with a
            company who&apos;s values align with mine.
          </p>
          <h3>Skills</h3>
          <div className={classes.techskills}>
            <ul className={classes.listcontainer}>
              <li className={classes.listitem}>HTML5</li>
              <li className={classes.listitem}>CSS3</li>
              <li className={classes.listitem}>JavaScript / ES6</li>
              <li className={classes.listitem}>React.js</li>
              <li className={classes.listitem}>Figma</li>
              <li className={classes.listitem}>Postman</li>
              <li className={classes.listitem}>Git/GitHub</li>
              <li className={classes.listitem}>Node.js</li>
              <li className={classes.listitem}>MongoDB</li>
              <li className={classes.listitem}>Next.js</li>
              <li className={classes.listitem}>Sass</li>
              <li className={classes.listitem}>Visual Studio Code</li>
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
