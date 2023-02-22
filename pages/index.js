import { Fragment } from "react";
import MainSection from "../components/MainSection";
import AboutSection from "../components/AboutSection";
import Projects from "../components/Projects";
import NavbarComponent from "../components/navbar";
import Parallax from "../components/Parallax";
import ContactUs from "../components/ContactUs";
import 'bootstrap/dist/css/bootstrap.min.css';



function Homepage() {
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  return (
    <Fragment>
      <NavbarComponent/>
      <MainSection></MainSection>
      <Parallax/>
      <AboutSection></AboutSection>
      <Parallax/>
      <Projects></Projects>
      <ContactUs></ContactUs>
    </Fragment>
  );
}

export default Homepage;
