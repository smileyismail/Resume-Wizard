import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { educationDataSliceActions } from "../../Redux/educationDataSlice";

const EducationInfo = () => {
  const dispatch = useDispatch();
  const eduList = useSelector((state) => state.educationData);

  function eduAddHandler() {
    if (eduList.length === 3) {
      alert("You can add only 3 Education");
      return;
    }
    dispatch(
      educationDataSliceActions.addEduHandler({
        degree: "",
        university: "",
        startYear: "",
        endYear: "",
      })
    );
  }

  function eduRemoveHandler() {
    dispatch(educationDataSliceActions.removeEduHandler());
  }

  function degreeChangeHandler(e, index) {
    dispatch(
      educationDataSliceActions.getDegree({
        id: index,
        value: e.target.value,
      })
    );
  }

  function universityChangeHandler(e, index) {
    dispatch(
      educationDataSliceActions.getUniversity({
        id: index,
        value: e.target.value,
      })
    );
  }

  function startYearChangeHandler(e, index) {
    dispatch(
      educationDataSliceActions.getStartYear({
        id: index,
        value: e.target.value,
      })
    );
  }

  function endYearChangeHandler(e, index) {
    dispatch(
      educationDataSliceActions.getEndYear({
        id: index,
        value: e.target.value,
      })
    );
  }

  return (
    <section>
      <h3 className="fw-bolder mb-4 text-decoration-underline">Education</h3>

      <div className="form-group mb-3">
        {eduList.map((edu, index) => (
          <div key={index} className="row education mb-4">
            <label htmlFor="education" className="fw-bold mb-1 fs-5">
              Education {index + 1}
            </label>
            <div className="d-flex mb-2 ">
              <input
                type="text"
                className="form-control"
                placeholder="Degree Name"
                onChange={(e) => degreeChangeHandler(e, index)}
              />
              &nbsp;
              <input
                type="text"
                className="form-control"
                placeholder="University Name"
                onChange={(e) => universityChangeHandler(e, index)}
              />
            </div>

            <div className="col-7 d-flex ">
              <input
                type="number"
                className="form-control"
                placeholder="Start Year"
                onChange={(e) => startYearChangeHandler(e, index)}
              />
              &nbsp;
              <input
                type="number"
                className="form-control"
                placeholder="End Year"
                onChange={(e) => endYearChangeHandler(e, index)}
              />
            </div>
          </div>
        ))}

        <div className="p-0 text-end">
          {eduList.length > 1 && (
            <button className="btn btn-danger me-3" onClick={eduRemoveHandler}>
              Remove
            </button>
          )}

          <button className="btn btn-primary" onClick={eduAddHandler}>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default EducationInfo;
