import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import mobileDevImage from '../assets/images/mobile-dev-image-2.png';
import cloudDevImage from '../assets/images/cloud-dev-image.png';
import techMentorImage from '../assets/images/tech-mentor-image.png';
import bgMaster from '../assets/images/bg-masthead.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">
            {config.headingFirstName}
          </h1>
          <h1 className="mx-auto my-0 text-uppercase">
            {config.headingLastName}
          </h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">About Me</h2>
            <p className="text-white-50 about-me-first-paragraph">
              I am a dedicated Senior Software Engineer who believes that the
              best solutions are created when innovation, collaboration, and a
              relentless pursuit of quality are at the forefront. With over 10
              years of diverse and extensive experience, I've consistently
              delivered top-tier software solutions focusing on extensible
              architectures, user-centric design, and cost optimization.
            </p>
            <p className="text-white-50">
              Throughout my career, I've led complex projects and guided teams
              to success - transforming ideas into fully functional,
              high-quality applications. My expertise in Native iOS and React
              Native development - complemented by my proficiency in full-stack
              cloud-native solutions and Android development - has enabled me to
              drive impactful changes and significant improvements in product
              performance and user experience.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="experience" className="experience-section bg-light">
      <div className="container">
        <h2 id="experience-section-title" className="mb-5">
          Experience
        </h2>
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Engineering Leadership</h4>
              <p className="text-black-50 mb-2">
                I successfully lead diverse engineering teams, fostering an
                environment of collaboration, innovation, and continuous
                improvement.
              </p>
              <p className="text-black-50 mb-2">
                My leadership includes mentoring engineers, optimizing project
                workflows, and addressing stakeholder needs to plan and deliver
                scalable software solutions that exceed expectations and provide
                top-quality user experience to millions of customers.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6 col-filled-with-image">
            <img
              className="img-fluid aspect-fit-cropped-img"
              src={mobileDevImage}
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Mobile Development</h4>
                  <p className="mb-2 text-white-50">
                    As a Software Engineer for over a decade, my primary
                    expertise lies in Native iOS and React Native development.
                  </p>
                  <p className="mb-2 text-white-50">
                    For a Fortune 500 Financial Institution, I've led teams
                    responsible for developing complex features that adhere to
                    strict OWASP Mobile Application Security standards and ADA
                    compliance. These features have generated tens of millions
                    in additional revenue.
                  </p>
                  <p className="mb-2 text-white-50">
                    As a technical lead, I've authored and maintained feature
                    documentation in the form of Lucid Flowcharts, internal
                    articles, and contributions to C4 Diagrams and Github Wiki
                    documentation. My teams have achieved high automated testing
                    coverage with Appium, Sauce Labs, and RNTL.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6 col-filled-with-image">
            <img
              className="img-fluid aspect-fit-cropped-img"
              src={cloudDevImage}
              alt=""
            />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">
                    Full-Stack Web and Cloud Solutions
                  </h4>
                  <p className="mb-2 text-white-50">
                    I excel in modernizing legacy systems and deploying them as
                    microservices to cloud platforms like Pivotal Cloud Foundry.
                  </p>
                  <p className="mb-2 text-white-50">
                    My work in optimizing backend services for a Fortune 500
                    Financial Institution has resulted in substantial cost
                    savings, demonstrating my ability to deliver efficient and
                    scalable cloud-native solutions.
                  </p>
                  <p className="mb-2 text-white-50">
                    I'm the first engineer at my company to achieve
                    certification as a Pivotal Certified PCF Developer. I have
                    well-versed and in-depth experience with Java, Spring Boot,
                    Docker, SQL, React, Javascript, JQuery, HTML, SASS, and many
                    other full-stack web development tools.
                  </p>
                  <p className="mb-2 text-white-50">
                    This website was made with Node.js, React, and GraphQL.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6 col-filled-with-image">
            <img
              className="img-fluid aspect-fit-cropped-img"
              src={techMentorImage}
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Management and Mentorship</h4>
                  <p className="mb-2 text-white-50">
                    As an internal technical manager for numerous client-facing
                    engineers, I've provided mentorship and roadmaps for skill
                    and career development - enabling them to become proficient
                    contributors to complex client projects.
                  </p>
                  <p className="mb-2 text-white-50">
                    As a technical lead, I've mentored new engineers on
                    architecture, codebase, and best coding practices. I've
                    given guidance on Agile, pair programming, Extreme
                    Programming (XP), and Test-Driven Development (TDD).
                  </p>
                  <p className="mb-2 text-white-50">
                    I've led project demos and delegated feature demos to junior
                    developers for them to build trust with stakeholders.
                  </p>
                  <p className="mb-2 text-white-50">
                    I've facilitated knowledge-sharing sessions and "tech
                    retros" that have empowered teams to achieve high standards
                    of quality and efficiency. I've conducted interviews and
                    played a pivotal role in successful candidate hires -
                    ensuring the acquisition of top talent for both my company
                    and clients.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
