import React from "react";
import CvAbout from "./CvAbout";
import CvSkills from "./CvSkills";
import CvSocial from "./CvSocial";
import CvContact from "./CvContact";
import CvExperince from "./CvExperince";
import CvEducations from "./CvEducations";
import CvReference from "./CvReference";

const Cv = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 first_section">
          <CvAbout />
          <CvSkills />
          <CvSocial />
          <CvContact />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 second_section">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 cv_author">
              <h4 className=" cv_header">As Md Habibullah</h4>
              <p>Full Stack Web Application Developer</p>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <CvExperince />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <CvEducations />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <CvReference />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
