import React from "react";
import Styles from "./ResumeComponents.module.css";

import { FaGraduationCap } from "react-icons/fa";

import { useSelector } from "react-redux";

const ResumeEducationInfo = () => {
  const educations = useSelector((state) => state.educationData);

  return (
    <div>
      <div className={Styles.heading}>
        <span>
          <FaGraduationCap />
        </span>
        <h4 className="fw-bolder">Education</h4>
      </div>

      <div className={Styles.education}>
        <div>
          {educations.map((education, index) => (
            <div key={index} className="mb-2">
              <span>{education.degree}</span>,&nbsp;
              <span>{education.university}</span>,&nbsp;
              <span>
                {education.startYear}-{education.endYear}
              </span>
            </div>
          ))}

          <hr />
        </div>
      </div>
    </div>
  );
};

export default ResumeEducationInfo;
