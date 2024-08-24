import React from "react";
import Schooling from "./Schooling";
import Languages from "./Languages";
import Strengths from "./Strengths";

import './ResumeSection.css';

function ResumeSection() {
  return (
    <section id="resume">
      <h2 className="text-capitalize ">resume</h2>
      <br />
      <div className=" row mx-5 flex-container  flex-wrap justify-content-between ">
        <div className="col-lg-3   m-1 pt-3">
          <span className="bg-primary text-light px-5 py-2 mt-3  fw-medium ">
            SCHOOLING
          </span>
          <Schooling
            schoolName="Rayat Bahra University, Mohali"
            year="2021-2025"
            caption="Currently I'm pursuing my graduation in computer Science Engineering specialisation in
             Artificial Intelligence and Machine Learning"
            scores=" SGPA-9.03 , CGPA-8.77"
          />
          <Schooling
            schoolName="Pathseekers"
            year="2019-2021"
            caption="I have completed my schooling and higher education from Pathseekers
            School"
            scores={`10th-95.6% ${"  , "}12th-90.2%`}
          />
        </div>
        <div className="col-lg-3   m-1 ">
          <Languages />
        </div>
        <div className="col-lg-3   m-1 ">
          <Strengths />
        </div>
        
      </div>
    </section>
  );
}

export default ResumeSection;
