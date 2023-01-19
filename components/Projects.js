import Image from "next/image";
import classes from "./Projects.module.css";
import profilepic from "../public/eid-pic-selfie.jpg";
import fruityvicepic from "../public/Fruityvicescreenshot.png";
import landingpagepic from "../public/MCAlandingpagescreenshot.png";
import oldwebsitepic from "../public/oldsitescreenshot.png";
import wordleclonepic from "../public/wordlescreenshot.png";

function Projects() {
  const picstyle = {
    borderRadius: "5%",
  };

  return (
    <>
      <section id="projects" className={classes.section}>
        <h1 className={classes.title}>Projects</h1>
        <div className={classes.projectscontainer}>
          <div className={classes.singleproject}>
            <Image
              style={picstyle}
              alt="image of the project"
              src={fruityvicepic}
              height={200}
              width={355.56}
            />
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
            </div>
          </div>
          <div className={classes.singleproject}>
            <Image
              style={picstyle}
              alt="image of the project"
              src={landingpagepic}
              height={200}
              width={355.56}
            />
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
            </div>
          </div>
          <div className={classes.singleproject}>
            <Image
              style={picstyle}
              alt="image of the project"
              src={wordleclonepic}
              height={200}
              width={355.56}
            />
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
                answer with a limited number of attempts. The game gives you clues as to whether the letters are correct, not correct or almost correct.
              </p>
            </div>
          </div>
          <div className={classes.singleproject}>
            <Image
              style={picstyle}
              alt="image of the project"
              src={oldwebsitepic}
              height={200}
              width={355.56}
            />
            <div className={classes.projecttext}>
              <h3 className={classes.projecttitle}>
                <a href="https://faopaw.github.io/idirisomer.github.io/">
                  My First Webpage
                </a>
              </h3>
              <p className={classes.projectdescription}>
                This was the first website I created using only HTML and Sass. Despite its simplicity, it is easy on the eye, responsive and straightforward.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
