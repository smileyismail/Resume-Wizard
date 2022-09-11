import React from "react";

import { Link } from "react-router-dom";

import PersonalInfo from "../Components/Resume Form/PersonalInfo";
import ContactInfo from "../Components/Resume Form/ContactInfo";
import EducationInfo from "../Components/Resume Form/EducationInfo";
import CoursesInfo from "../Components/Resume Form/CoursesInfo";
import SkillsInfo from "../Components/Resume Form/SkillsInfo";

const Editor = (props) => {
  function getPersonalData(data) {
    props.getPersonalData(data);
  }
  function getContactData(data) {
    props.getContactData(data);
  }

  return (
    <div className="m-auto col-6">
      <h1 className="text-center fw-bolder text-decoration-underline">
        Resume Builder
      </h1>
      <p className="text-center fst-italic">By Smiley Ismail</p>
      <hr className="mb-5" />
      <PersonalInfo getPersonalData={getPersonalData} />
      <hr />
      <ContactInfo getContactData={getContactData} />
      <hr />
      <EducationInfo />
      <hr />
      <CoursesInfo />
      <hr />
      <SkillsInfo />
      <hr />
      <div className="d-flex justify-content-center mb-4">
        <Link to="/template" className="btn-primary btn btn-lg">
          Generate
        </Link>
      </div>
    </div>
  );
};

export default Editor;
