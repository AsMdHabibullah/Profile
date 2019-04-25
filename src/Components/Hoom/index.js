import React from "react";
import Canvase from "./Canvase";
import Skills from "./Skills";
import Clients from './Claints';
import Projects from "./Projects";
import Team from "./Team";
import HomeContact from "./HomeContact";

const index = () => {
  return (
    <React.Fragment>
      <Canvase />
      <Skills />
      <Clients />
      <Projects />
      <Team />
      <HomeContact />
    </React.Fragment>
  );
};

export default index;
