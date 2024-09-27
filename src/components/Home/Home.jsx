import React from "react";
import "./Home.css";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";

const iteamVarients = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
    },
  },
};

const Home = () => {
  return (
    <div className="home">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={iteamVarients}
        className="home-title"
      >
        <h1>Agency</h1>
        <p>
          We’re an award winning design agency specialised in art direction, 3D,
          visual identity and web design.
        </p>
      </motion.div>
      <div className="home-pic-container">
        {assets.map((item) => {
          return (
            <div className="home-pic" key={item.id}>
              <a href="/projects">
                <img src={item.image} alt="" />
              </a>
              <h2>{item.title}</h2>
              <p>{item.discription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
