import React from "react";
import { useDispatch } from "react-redux";

import { personalDataSliceActions } from "../../Redux/personalDataSlice";

const PersonalInfo = () => {
  const dispatch = useDispatch();

  function nameChangeHandler(e) {
    // dispatch(personalDataSliceActions.getName(e.target.value));
    dispatch(personalDataSliceActions.getName(e.target.value));
  }
  function titleChangeHandler(e) {
    dispatch(personalDataSliceActions.getTitle(e.target.value));
  }
  function bioChangeHandler(e) {
    dispatch(personalDataSliceActions.getBio(e.target.value));
  }

  return (
    <section>
      <h3 className="fw-bolder mb-4 text-decoration-underline">
        Personal Information
      </h3>
      <div className="form-group mb-3">
        <label htmlFor="name" className="fw-bold mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          placeholder="Enter your Name"
          onChange={nameChangeHandler}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="title" className="fw-bold mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="form-control"
          placeholder="Enter your Title"
          onChange={titleChangeHandler}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="bio" className="fw-bold mb-1">
          Bio
        </label>
        <textarea
          id="bio"
          className="form-control"
          cols="30"
          rows="7"
          maxLength="450"
          placeholder="Tell about yourself (in 450 letters)"
          onChange={bioChangeHandler}
        ></textarea>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="picture" className="fw-bold mb-1">
          Profile Picture
        </label>
        <input type="file" id="picture" className="form-control" />
      </div>
    </section>
  );
};

export default PersonalInfo;
