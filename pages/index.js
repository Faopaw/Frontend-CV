import { Fragment } from "react";
import MainSection from "../components/MainSection";
import AboutSection from "../components/AboutSection";
import NavbarComponent from "../components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


function Homepage() {
  return (
    <Fragment>
      <NavbarComponent/>
      <MainSection></MainSection>
      <AboutSection></AboutSection>
    </Fragment>
  );
}

export default Homepage;
