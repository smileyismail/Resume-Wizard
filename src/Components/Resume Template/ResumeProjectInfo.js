import React from "react";
import { useSelector } from "react-redux";

import Styles from "./ResumeComponents.module.css";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const ResumeProjectInfo = () => {
  const projects = useSelector((state) => state.projectsData);

  return (
    <div className={Styles.projectInfo}>
      <div className={Styles.heading}>
        <span>
          <AiOutlineFundProjectionScreen />
        </span>
        <h4 className="fw-bolder">Projects</h4>
      </div>

      <div className={Styles.projects}>
        {projects.map((project, index) => (
          <div key={index}>
            <h5 className="fw-bolder">
              {index + 1}⟯ {project.projectName}:
            </h5>
            <p>
              <span>• {project.pointOne}</span>
              <br />
              <span>• {project.pointTwo}</span>
              <br />
              <span>• {project.pointThree}</span>
              <br />
              <hr className="m-2" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeProjectInfo;
