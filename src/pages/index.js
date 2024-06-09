import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import mobileDevImage from '../assets/images/mobile-dev-image-2.png';
import demoImage2 from '../assets/images/demo-image-02.jpg';
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
            <p className="text-white-50">
              I am a passionate Senior Software Engineer who believes that the
              best products are created when innovation, collaboration, and a
              relentless pursuit of quality are at the forefront. With over 10
              years of diverse experience, I have consistently delivered
              top-tier software solutions, focusing on extensible architectures,
              user-centric design, and cost optimization.
            </p>
            <p className="text-white-50">
              Throughout my career, I have led complex projects and guided teams
              to success, transforming ideas into fully functional, high-quality
              applications. My expertise in Native iOS and React Native
              development, complemented by my proficiency in full-stack
              cloud-native solutions and Android development, has enabled me to
              drive impactful changes and significant improvements in product
              performance.
            </p>
            <p className="text-white-50">
              As a Senior Software Engineer and Technical Consultant at Kin +
              Carta, I have been instrumental in modernizing legacy systems,
              deploying microservices, and optimizing backend services to
              achieve substantial cost savings for clients. My commitment to
              mentorship and knowledge sharing has fostered a collaborative
              environment where engineers thrive and innovate.
            </p>
            <p className="text-white-50">
              I am dedicated to continuous learning and professional growth,
              always staying at the cutting edge of technology trends. My
              approach combines technical excellence with a deep understanding
              of user needs, ensuring that every project I undertake not only
              meets but exceeds expectations.
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
                high-quality software solutions that exceed client expectations
                and impact millions of customers.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={mobileDevImage} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Mobile Development</h4>
                  <p className="mb-2 text-white-50">
                    With over a decade of experience in software engineering, my
                    primary expertise lies in Native iOS and React Native
                    development.
                  </p>
                  <p className="mb-2 text-white-50">
                    For a Fortune 500 Financial Institution, I've successfully
                    led teams responsible for developing complex features that
                    adhered to strict OWASP Mobile Application Security
                    standards as well as ensuring ADA compliance.
                  </p>
                  <p className="mb-2 text-white-50">
                    I've successfully led projects generating millions in
                    additional revenue - one of which led to a 64% increase in
                    credit card activations and a 73% increase in account
                    registrations.
                  </p>
                  <p className="mb-2 text-white-50">
                    I've successfully led projects generating millions in
                    additional revenue - one of which led to a 64% increase in
                    credit card activations and a 73% increase in account
                    registrations.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Full-Stack Cloud Solutions</h4>
                  <p className="mb-0 text-white-50">
                    I excel in modernizing legacy systems and deploying them as
                    microservices to cloud platforms like Pivotal Cloud Foundry.
                  </p>
                  <br />
                  <p className="mb-0 text-white-50">
                    My work in optimizing backend services has resulted in
                    significant cost savings for clients, demonstrating my
                    ability to deliver efficient and scalable cloud-native
                    solutions.
                  </p>
                  <br />
                  <p className="mb-0 text-white-50">
                    My knowledge of Java, Spring Boot, and SQL, coupled with my
                    certification as a Pivotal Certified PCF Developer,
                    demonstrates my capability in this area.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
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
