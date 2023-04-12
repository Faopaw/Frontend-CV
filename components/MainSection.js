import Image from 'next/image';
import classes from './MainSection.module.css';
// import mainImage from './/../public/dddepth-088.jpg';
import mainImage from './/../public/undraw_our_solution_re_8yk6.svg';

import React, { useState, useEffect, Component } from 'react';
import Typical from 'react-typical';
import NavbarComponent from '../components/navbar';

function MainSection() {
  const style = {
    borderRadius: '3rem',
  };

  return (
    <>
      <section id='home' className={classes.maincontainer}>
        <div className={classes.main}>
          <div className={classes.maintext}>
            Hi there, I am <span className={classes.myname}>Idiris Omer</span>,
            <br></br>
            <Typical
              steps={[
                'Frontend Developer',
                1000,
                'Web Developer',
                1000,
                'JavaScript Developer',
                1000,
                'React Developer',
                1000,
                'Bug finder',
                1000,
                'Looking for a job',
                800
              ]}
              loop={Infinity}
              wrapper='p'
            />
            <p className={classes.leadingtext}>
              I am a Front End developer with experience building websites and
              web applications. I specialize in frontend technologies such as
              JavaScript, React & Next.js. Currently learning about Next.js and
              working on projects.
            </p>
            <button href='#about' className={classes.mainButton}>
              <a className={classes.mainButtonText} href='#about'>Find out more!</a>
            </button>
          </div>
          <div className={classes.mainimage}>
            <Image
              data-testid='image'
              style={style}
              alt='AI generated image of a wild wavy circular pattern'
              src={mainImage}
              height={500}
              width={500}
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSection;
