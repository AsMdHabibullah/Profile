import React from "react";
import Canvase from "./Canvase";
import Skills from "./Skills";
import Projects from "./Projects";
import Team from "./Team";
import HomeContact from "./HomeContact";

const index = () => {
  return (
    <React.Fragment>
      <Canvase />
      <Skills />
      <Projects />
      <Team />
      <HomeContact />
    </React.Fragment>
  );
};

export default index;
