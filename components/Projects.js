import Image from "next/image";
import classes from "./Projects.module.css";
import profilepic from "../public/eid-pic-selfie.jpg";
import fruityvicepic from "../public/Fruityvicescreenshot.png";
import landingpagepic from "../public/MCAlandingpagescreenshot.png";
import oldwebsitepic from "../public/oldsitescreenshot.png";
import wordleclonepic from "../public/wordlescreenshot.png"

function Projects() {

    const picstyle = {
        borderRadius: "5%"
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
              <h3 className={classes.projecttitle}><a href="https://fruityvice-react-app.vercel.app/">Fruityvice API</a></h3>
              <p className={classes.projectdescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent euismod, tellus eget dapibus posuere, risus dolor
                iaculis nibh, nec ornare mi ex non velit. Morbi sit amet nisl
                sit amet nunc sollicitudin fringilla. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Suspendisse eget
                ultrices lacus. Morbi ante lacus, luctus nec massa ut, efficitur
                cursus nibh. Nullam finibus ex.
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
              <h3 className={classes.projecttitle}><a href="https://github.com/Faopaw/mca_landingpage">MCA Landing Page</a></h3>
              <p className={classes.projectdescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent euismod, tellus eget dapibus posuere, risus dolor
                iaculis nibh, nec ornare mi ex non velit. Morbi sit amet nisl
                sit amet nunc sollicitudin fringilla. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Suspendisse eget
                ultrices lacus. Morbi ante lacus, luctus nec massa ut, efficitur
                cursus nibh. Nullam finibus ex.
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
              <h3 className={classes.projecttitle}><a href="https://github.com/Faopaw/wordle-game-react">Wordle Clone</a></h3>
              <p className={classes.projectdescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent euismod, tellus eget dapibus posuere, risus dolor
                iaculis nibh, nec ornare mi ex non velit. Morbi sit amet nisl
                sit amet nunc sollicitudin fringilla. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Suspendisse eget
                ultrices lacus. Morbi ante lacus, luctus nec massa ut, efficitur
                cursus nibh. Nullam finibus ex.
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
              <h3 className={classes.projecttitle}><a href="https://faopaw.github.io/idirisomer.github.io/">First Webpage</a></h3>
              <p className={classes.projectdescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent euismod, tellus eget dapibus posuere, risus dolor
                iaculis nibh, nec ornare mi ex non velit. Morbi sit amet nisl
                sit amet nunc sollicitudin fringilla. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Suspendisse eget
                ultrices lacus. Morbi ante lacus, luctus nec massa ut, efficitur
                cursus nibh. Nullam finibus ex.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
