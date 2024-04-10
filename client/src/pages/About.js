import React from "react";
import Layout from "../components/layout/Layout.js";
import about from "../Images/About.png";
const About = () => {
  return (
    <Layout title={'About'}>
      <div className="about-main">
        <div className="about-left">
          <img src={about} alt="" />
        </div>
        <div className="about-right">
          <p>
          <div className="about">
          <strong>About Us</strong>
          </div>
           
            <br />
            Welcome to TechBazar, your premier destination for discovering
            unique treasures and must-have items! Established in 2015, Fabulous
            Finds was born out of a passion for uncovering hidden gems and
            sharing them with the world.
            <br />
            <br />
            Our team scours the globe to bring you an eclectic collection of
            fashion-forward clothing, accessories, home decor, gadgets, and
            more. From vintage-inspired pieces to cutting-edge innovations, we
            curate our selection with care to ensure that every product reflects
            our commitment to quality and style.
            <br />
            <br />
            At TechBazar, we believe that shopping should be an adventure.
            That's why we've designed our website to be a virtual treasure
            trove, where you can explore new trends, discover unique artisans,
            and find inspiration for your next great find.
            <br />
            <br />
            As a customer-centric company, we prioritize your satisfaction above
            all else. We offer secure payment options, hassle-free returns, and
            dedicated customer support to ensure that your shopping experience
            with us is nothing short of fabulous.
            <br />
            <br />
            Join the TechBazar community today and embark on a journey of
            discovery, creativity, and endless possibilities. From fashionistas
            to tech enthusiasts, there's something for everyone at Fabulous
            Finds!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
