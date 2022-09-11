import React from "react";

import Styles from "./ResumeComponents.module.css";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const ResumeProjectInfo = () => {
  return (
    <div className={Styles.projectInfo}>
      <div className={Styles.heading}>
        <span>
          <AiOutlineFundProjectionScreen />
        </span>
        <h4 className="fw-bolder">Projects</h4>
      </div>

      <div className={Styles.projects}>
        <div>
          <h5 className="fw-bolder">Expense Tracker:</h5>
          <p>
            &nbsp;•&nbsp;Lorem ipsum dolor sit amet elit. Eum, asperiores <br />
            &nbsp;•&nbsp;Lorem ipsum dolor sit amet elit. Corrupti, nihil
            <br /> &nbsp;•&nbsp;Lorem ipsum dolor sit amet consectetur
            adipisicing elit. <br />
          </p>
        </div>
        <div>
          <h5 className="fw-bolder">Expense Tracker:</h5>
          <p>
            &nbsp;•&nbsp;Lorem ipsum dolor sit amet elit. Eum, asperiores <br />
            &nbsp;•&nbsp;Lorem ipsum dolor sit amet elit. Corrupti, nihil
            <br /> &nbsp;•&nbsp;Lorem ipsum dolor sit amet consectetur
            adipisicing elit. <br />
          </p>
        </div>
        <div>
          <h5 className="fw-bolder">Expense Tracker:</h5>
          <p>
            &nbsp;•&nbsp;Lorem ipsum dolor sit amet elit. Eum, asperiores <br />
            &nbsp;•&nbsp;Lorem ipsum dolor sit amet elit. Corrupti, nihil
            <br /> &nbsp;•&nbsp;Lorem ipsum dolor sit amet consectetur
            adipisicing elit. <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeProjectInfo;
