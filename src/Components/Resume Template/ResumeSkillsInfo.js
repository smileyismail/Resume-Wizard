import React from "react";

import Styles from "./ResumeComponents.module.css";

import { RiSettingsLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const ResumeSkillsInfo = () => {
  const skills = useSelector((state) => state.skillsData);
  return (
    <div>
      <div className={Styles.heading}>
        <span>
          <RiSettingsLine />
        </span>
        <h4 className="fw-bolder">Skills</h4>
      </div>

      <div className={Styles.skills}>
        {skills.map((skill) => (
          <div className="mb-3  fw-bold">
            {skill.skillName}
            <div className={Styles.bar}>
              <div style={{ width: `${skill.range}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeSkillsInfo;
