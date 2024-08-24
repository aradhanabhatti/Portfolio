import React from "react";
import { skills } from '../utils/data';
import './SkillSection.css';

function SkillSection() {
  return (
    <>
      {/* <section id="skills" className="mt-lg-5">
        <h2>Skills</h2>
        <div className="row flex-wrap">
          <div className="col-lg-12 w-100 ">
            <Barcontainer />
          </div>
        </div>
      </section> */}
      <div className="container" id="skills">
      <div className="wrapper">
        <div className="title">Skills</div>
        {/* <div className="desc">Here are some of my skills on which I have been working.</div> */}
        <div className="skills-container">
          {skills.map((skill) => (
            <div className="skill" key={skill.title}>
              <h2 className="skill-title">{skill.title}</h2>
              <div className="skill-list">
                {skill.skills.map((item) => (
                  <div className="skill-item" key={item.name}>
                    <img className="skill-image" src={item.image} alt={item.name} />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default SkillSection;
