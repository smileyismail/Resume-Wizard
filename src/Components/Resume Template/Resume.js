import React from "react";

import { Link } from "react-router-dom";
import ResumeContactInfo from "./ResumeContactInfo";
import ResumeCoursesInfo from "./ResumeCoursesInfo";
import ResumeEducationInfo from "./ResumeEducationInfo";
import ResumePersonalInfo from "./ResumePersonalInfo";
import ResumeProjectInfo from "./ResumeProjectInfo";
import ResumeSkillsInfo from "./ResumeSkillsInfo";

import Styles from "./Resume.module.css";

const Resume = () => {
  return (
    <section className={Styles.section}>
      <Link to="/editor" className="btn btn-danger mb-3 mt-2 ">
        Go Back
      </Link>

      <div className={Styles.resume}>
        <div className={Styles.resumeLeft}>
          <ResumePersonalInfo />
          <ResumeProjectInfo />
        </div>
        <div className={Styles.resumeRight}>
          <ResumeContactInfo />
          <div className={Styles.rightBottom}>
            <ResumeSkillsInfo />
            <ResumeEducationInfo />
            <ResumeCoursesInfo />
          </div>
        </div>
      </div>

      <button className="btn btn-secondary mt-4" onClick={window.print}>
        Print
      </button>
    </section>
  );
};

export default Resume;
