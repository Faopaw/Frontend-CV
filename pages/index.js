import { Fragment } from "react";
import MainSection from "../components/MainSection";
import AboutSection from "../components/AboutSection";
import Projects from "../components/Projects";
import NavbarComponent from "../components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


function Homepage() {
  return (
    <Fragment>
      <NavbarComponent/>
      <MainSection></MainSection>
      <AboutSection></AboutSection>
      <Projects></Projects>
    </Fragment>
  );
}

export default Homepage;
