import React from "react";
import "./Clients.css";
import { logo } from "../../assets/assets";
import { motion } from "framer-motion";

const iteamVarients = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
    },
  },
};
const Clients = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={iteamVarients}
      className="clients"
    >
      <h1 h1 className="clients-text">
        Clients
      </h1>
      <div className="clients-logo">
        {logo.map((item) => {
          return (
            <img className="logos" key={item.id} src={item.image} alt="" />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Clients;
