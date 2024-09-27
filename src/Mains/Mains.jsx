import React from "react";
import Home from "../components/Home/Home";
import Clients from "../components/Clients/Clients";
import Sticky from "../components/StickyContainer/Sticky";

const Main = () => {
  return (
    <div>
      <Home />
      <Clients />
      <Sticky />
    </div>
  );
};

export default Main;
