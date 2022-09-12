import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { skillsDataSliceActions } from "../../Redux/skillsDataSlice";

const SkillsInfo = () => {
  const dispatch = useDispatch();
  const skillsList = useSelector((state) => state.skillsData);

  function skillAddHandler() {
    if (skillsList.length === 6) {
      alert("You can add only 3 Courses");
      return;
    }

    dispatch(
      skillsDataSliceActions.addSkillHandler({
        skillName: "",
        range: "",
      })
    );
  }
  function skillRemoveHandler() {
    dispatch(skillsDataSliceActions.removeSkillHandler());
  }

  function skillNameChangeHandler(e, index) {
    dispatch(
      skillsDataSliceActions.getSkillName({ value: e.target.value, id: index })
    );
  }
  function skillRangeChangeHandler(e, index) {
    dispatch(
      skillsDataSliceActions.getRange({ value: e.target.value, id: index })
    );
  }

  return (
    <section>
      <h3 className="fw-bolder mb-4 text-decoration-underline">Skills</h3>

      <div className="row mb-3">
        {skillsList.map((skill, index) => (
          <div key={index} className="row education mb-4">
            <label htmlFor="education" className="fw-bold mb-1 fs-5">
              Skill {index + 1}
            </label>
            <div className="d-flex flex-sm-row flex-column ">
              <input
                type="text"
                name="courseName"
                className="form-control me-2 mb-sm-0 mb-2"
                placeholder="Skill Name"
                onChange={(e) => skillNameChangeHandler(e, index)}
              />
              {/* &nbsp; */}
              <div className="col-12 col-sm-8 d-flex justify-content-between align-items-center mt-2">
                <input
                  type="range"
                  name="university"
                  id="range"
                  step="10"
                  placeholder="Platform Name"
                  className="col-10 me-2 mb-sm-0 mb-2"
                  onChange={(e) => skillRangeChangeHandler(e, index)}
                />
                <label htmlFor="range" className="fw-bold btn btn-secondary">
                  {skillsList[index].range === ""
                    ? "50%"
                    : `${skillsList[index].range}%`}
                </label>
              </div>
            </div>
          </div>
        ))}

        <div className="p-0 text-end">
          {skillsList.length > 1 && (
            <button
              className="btn btn-danger me-3"
              onClick={skillRemoveHandler}
            >
              Remove
            </button>
          )}

          <button className="btn btn-primary" onClick={skillAddHandler}>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsInfo;
