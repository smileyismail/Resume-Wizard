import React from "react";
import { useSelector } from "react-redux";

import Styles from "./ResumeComponents.module.css";
import { RiExternalLinkLine } from "react-icons/ri";

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
              <a href="">
                <RiExternalLinkLine />
              </a>
            </h5>
            <p>
              <span>• {project.pointOne}</span>
              <br />
              <span>• {project.pointTwo}</span>
              <br />
              <span>• {project.pointThree}</span>
              <br />
            </p>
            <hr className="m-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeProjectInfo;
