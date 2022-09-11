import React from "react";
import { useSelector } from "react-redux";

import Styles from "./ResumeComponents.module.css";

import { FaLaptopCode } from "react-icons/fa";

const ResumeCoursesInfo = () => {
  const courses = useSelector((state) => state.coursesData);

  return (
    <div>
      <div className={Styles.heading}>
        <span>
          <FaLaptopCode />
        </span>
        <h4 className="fw-bolder">Courses</h4>
      </div>

      <div className={Styles.courses}>
        {courses.map((course, index) => (
          <div key={index} className="mb-2">
            <span>{course.courseName}</span>,&nbsp;
            <span>{course.platform}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeCoursesInfo;
