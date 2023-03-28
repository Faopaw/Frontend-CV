import Image from "next/image";
import classes from "./Projects.module.css";
import profilepic from "../public/eid-pic-selfie.jpg";
import fruityvicepic from "../public/Fruityvicescreenshot.png";
import landingpagepic from "../public/MCAlandingpagescreenshot.png";
import oldwebsitepic from "../public/oldsitescreenshot.png";
import wordleclonepic from "../public/wordlescreenshot.png";
import taraweehappss from "../public/taraweehappss.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Projects() {
  const picstyle = {
    borderRadius: "10%",
    objectFit: "cover",
    objectPosition: "center",
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <section id="projects" className={classes.section}>
        <h1 className={classes.title}>Projects</h1>
        <div className={classes.projectscontainer}>
          <div
            style={{ gridArea: 1 / 1 / 2 / 2 }}
            className={classes.singleproject}
          >
            <div className={classes.imagecontainer}>
              <Image
                style={picstyle}
                alt="image of the project"
                src={taraweehappss}
                fill
              />
            </div>
            <div className={classes.projecttext}>
              <p className={classes.subtitle}>Featured Project</p>
              <h3 className={classes.projecttitle}>
                <a href="https://find-imam-taraweeh.vercel.app/">
                  find-imam-taraweeh
                </a>
              </h3>
              <p className={classes.projectdescription}>
                This project was built with React & Next.js. This app serves to
                solve the problem of finding an Imam to Lead the prayers in
                mosques nationwide. Users are able to login with either their
                email or one of their social accounts for ease of access.
                Authentication and Runtime validation are handled by Auth0 and
                Yup respectively.
              </p>
              <div>
                <ul className={classes.listcontainer}>
                  <li className={classes.listitem}>React</li>
                  <li className={classes.listitem}>Nextjs</li>
                  <li className={classes.listitem}>Contentful</li>
                  <li className={classes.listitem}>API</li>
                  <li className={classes.listitem}>Framer Motion</li>
                  <li className={classes.listitem}>Auth0</li>
                  <li className={classes.listitem}>formik</li>
                  <li className={classes.listitem}>yup</li>
                  <li className={classes.listitem}>Bootstrap</li>
                  <li className={classes.listitem}>JavaScript</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            style={{ gridArea: 2 / 1 / 3 / 2 }}
            className={classes.singleproject}
          >
            <div className={classes.imagecontainer}>
              <Image
                style={picstyle}
                alt="image of the project"
                src={fruityvicepic}
                fill
              />
            </div>
            <div className={classes.projecttext}>
              <h3 className={classes.projecttitle}>
                <a href="https://fruityvice-react-app.vercel.app/">
                  Fruityvice API App
                </a>
              </h3>
              <p className={classes.projectdescription}>
                This project was built collaboratively by a group of students
                from the Mindera Code Academy (UK) June 2022 Cohort. It was
                created with the aim of solidifying everything that was learnt.
                The task was to work with the Fruityvice API, go through the
                documentation and understand how the API functions, then create
                a web application around it to bring the features and
                information the API provides to life.
              </p>
              <div>
                <ul className={classes.listcontainer}>
                  <li className={classes.listitem}>React</li>
                  <li className={classes.listitem}>Express.js</li>
                  <li className={classes.listitem}>API</li>
                  <li className={classes.listitem}>JavaScript</li>
                  <li className={classes.listitem}>Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            style={{ gridArea: 3 / 1 / 4 / 2 }}
            className={classes.singleproject}
            // data-aos="fade-up"
          >
            <div className={classes.imagecontainer}>
              <Image
                style={picstyle}
                alt="image of the project"
                src={landingpagepic}
                fill
              />
            </div>
            <div className={classes.projecttext}>
              <h3 className={classes.projecttitle}>
                <a href="https://github.com/Faopaw/mca_landingpage">
                  MCA Landing Page
                </a>
              </h3>
              <p className={classes.projectdescription}>
                An example landing page created for Mindera Code Academy (MCA).
                This page was created using JavaScript, React, Bootstrap,
                video-react and other paackages. Designed Mobile-first with
                responsiveness and accessability kept in mind.
              </p>
              <div>
                <ul className={classes.listcontainer}>
                  <li className={classes.listitem}>React</li>
                  <li className={classes.listitem}>API</li>
                  <li className={classes.listitem}>JavaScript</li>
                  <li className={classes.listitem}>Bootstrap</li>
                  <li className={classes.listitem}>video-react</li>
                  <li className={classes.listitem}>aos</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            style={{ gridArea: 4 / 1 / 5 / 2 }}
            className={classes.singleproject}
          >
            <div className={classes.imagecontainer}>
              <Image
                style={picstyle}
                alt="image of the project"
                src={wordleclonepic}
                fill
              />
            </div>
            <div className={classes.projecttext}>
              <h3 className={classes.projecttitle}>
                <a href="https://github.com/Faopaw/wordle-game-react">
                  Wordle Clone
                </a>
              </h3>
              <p className={classes.projectdescription}>
                A clone of the viral 2022 game &apos;Wordle&apos;. This project
                was made using JavaScript, React, Animate.css and
                react-toastify. The aim of the game is to correctly guess the
                answer with a limited number of attempts. The game gives you
                clues as to whether the letters are correct, not correct or
                almost correct.
              </p>
              <div>
                <ul className={classes.listcontainer}>
                  <li className={classes.listitem}>React</li>
                  <li className={classes.listitem}>JavaScript</li>
                  <li className={classes.listitem}>animate.css</li>
                  <li className={classes.listitem}>react-toastify</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            style={{ gridArea: 5 / 1 / 6 / 2 }}
            className={classes.singleproject}
          >
            <div className={classes.imagecontainer}>
              <Image
                style={picstyle}
                alt="image of the project"
                src={oldwebsitepic}
                fill
              />
            </div>
            <div className={classes.projecttext}>
              <h3 className={classes.projecttitle}>
                <a href="https://faopaw.github.io/idirisomer.github.io/">
                  My First Webpage
                </a>
              </h3>
              <p className={classes.projectdescription}>
                This was the first website I created using only HTML and Sass.
                Despite its simplicity, it is easy on the eye, responsive and
                straightforward.
              </p>
              <div>
                <ul className={classes.listcontainer}>
                  <li className={classes.listitem}>HTML5</li>
                  <li className={classes.listitem}>Sass</li>
                  <li className={classes.listitem}>JavaScript</li>
                  <li className={classes.listitem}>Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
