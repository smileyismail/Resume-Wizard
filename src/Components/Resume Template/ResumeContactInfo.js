import React from "react";
import { useSelector } from "react-redux";
import Styles from "./ResumeComponents.module.css";

import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";

const ResumeContactInfo = () => {
  const email = useSelector((state) => state.contactData.email);
  const phone = useSelector((state) => state.contactData.phone);
  const linkedin = useSelector((state) => state.contactData.linkedin);
  const github = useSelector((state) => state.contactData.github);
  const personal = useSelector((state) => state.contactData.personal);

  return (
    <div className={Styles.contactInfo}>
      <div>
        <span>
          <AiOutlineMail />
        </span>

        <a href="https://www.google.com/" target="_">
          {email}
        </a>
      </div>

      <div>
        <span>
          <BsTelephone />
        </span>
        <a href="https://www.youtube.com/" target="_">
          {phone}
        </a>
      </div>

      <div>
        <span>
          <FiLinkedin />
        </span>
        <a href="https://www.youtube.com/" target="_">
          {linkedin}
        </a>
      </div>

      <div>
        <span>
          <FiGithub />
        </span>
        <a href="https://www.youtube.com/" target="_">
          {github}
        </a>
      </div>

      <div>
        <span>
          <BsPerson />
        </span>
        <a href="https://www.youtube.com/" target="_">
          {personal}
        </a>
      </div>
    </div>
  );
};

export default ResumeContactInfo;
