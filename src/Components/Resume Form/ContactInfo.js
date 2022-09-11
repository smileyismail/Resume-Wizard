import React from "react";

import { useDispatch } from "react-redux";
import { contactDataSliceActions } from "../../Redux/contactDataSlice";

const ContactInfo = () => {
  const dispatch = useDispatch();

  function emailChangeHandler(e) {
    dispatch(contactDataSliceActions.getEmail(e.target.value));
  }
  function phoneChangeHandler(e) {
    dispatch(contactDataSliceActions.getPhone(e.target.value));
  }
  function linkedinChangeHandler(e) {
    dispatch(contactDataSliceActions.getLinkedin(e.target.value));
  }
  function githubChangeHandler(e) {
    dispatch(contactDataSliceActions.getGithub(e.target.value));
  }
  function personalChangeHandler(e) {
    dispatch(contactDataSliceActions.getPersonal(e.target.value));
  }

  return (
    <section>
      <h3 className="fw-bolder mb-4 text-decoration-underline">
        Contact Information
      </h3>

      <div className="form-group mb-3">
        <label htmlFor="email" className="fw-bold mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Enter your Email"
          onChange={emailChangeHandler}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="number" className="fw-bold mb-1">
          Phone Number
        </label>
        <input
          type="number"
          id="number"
          className="form-control"
          placeholder="Enter your phone number"
          onChange={phoneChangeHandler}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="linkedin" className="fw-bold mb-1">
          Linkedin Profile
        </label>
        <input
          type="text"
          id="linkedin"
          className="form-control"
          placeholder="Add your Linkedin Profile link"
          onChange={linkedinChangeHandler}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="github" className="fw-bold mb-1">
          Github Profile
        </label>
        <input
          type="text"
          id="github"
          className="form-control"
          placeholder="Add your Github Profile link"
          onChange={githubChangeHandler}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="personalWebsite" className="fw-bold mb-1">
          Personal Website
        </label>
        <input
          type="text"
          id="personalWebsite"
          className="form-control"
          placeholder="Add your Personal website link"
          onChange={personalChangeHandler}
        />
      </div>
    </section>
  );
};

export default ContactInfo;
