import React from "react";
import "./Sticky.css";
import { servicestext } from "../../assets/assets";
import about from "../../assets/about.avif";
import about2 from "../../assets/about2.avif";
import about3 from "../../assets/about3.avif";
import { motion } from "framer-motion";

const iteamVarients = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
    },
  },
};

const Sticky = () => {
  return (
    <div className="sticky">
      <motion.div initial="hidden" whileInView="show" className="services">
        <h1 className="services-title">Services</h1>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={iteamVarients}
          className="services-text-container"
        >
          {servicestext.map((item) => {
            return (
              <div key={item.id} className="services-container">
                <img
                  className="services-logo"
                  src="https://agency-website72.netlify.app/static/media/logo.png.9ef55d7e1433d3cd3b35974538e2b7f6.svg"
                  alt=""
                />
                <h3 className="services-text-title">{item.title}</h3>
                <p className="services-text">{item.text}</p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={iteamVarients}
        className="about"
      >
        <h1 className="about-title">About</h1>
        <div className="about-container">
          <div className="about-text-one">
            We are a small team of innovators, designers, artists, and creators,
            who are exploring visual ways to convey ideas.
          </div>
          <div className="about-text-two">
            We are focusing on the intersection of artistic exploration and
            design — specialised in art direction, visual identity, 3D and web
            design.
          </div>
          <div className="about-img-container">
            <img className="about-main-img" src={about} alt="" />
            <div className="about-second-img">
              <img className="about-img-1" src={about2} alt="" />
              <img className="about-img-2" src={about3} alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sticky;
