import React from "react";

import Styles from "./ResumeComponents.module.css";

import { useSelector } from "react-redux";

const ResumePersonalInfo = () => {
  const name = useSelector((state) => state.personalData.name);
  const title = useSelector((state) => state.personalData.title);
  const bio = useSelector((state) => state.personalData.bio);

  return (
    <div className={Styles.personalInfo}>
      <h1 className="fw-bolder">{name}</h1>
      <h4 className="fw-bold mb-3">{title}</h4>
      <p>{bio}</p>
    </div>
  );
};

export default ResumePersonalInfo;
