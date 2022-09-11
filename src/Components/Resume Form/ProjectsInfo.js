import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { projectDataSliceActions } from "../../Redux/projectDataSlice";

const ProjectsInfo = () => {
  const dispatch = useDispatch();
  const projectsList = useSelector((state) => state.projectsData);

  console.log(projectsList);

  function projectAddHandler() {
    if (projectsList.length === 5) {
      alert("You can add only 5 projects");
      return;
    }
    dispatch(
      projectDataSliceActions.addProjectHandler({
        projectName: "",
        pointOne: "",
        pointTwo: "",
        pointThree: "",
      })
    );
  }
  function projectRemoveHandler() {
    dispatch(projectDataSliceActions.removeProjectHandler());
  }

  function projectNameChangeHandler(e, index) {
    dispatch(
      projectDataSliceActions.getProjectName({
        value: e.target.value,
        id: index,
      })
    );
  }
  function onePointChangeHandler(e, index) {
    dispatch(
      projectDataSliceActions.getPointOne({
        value: e.target.value,
        id: index,
      })
    );
  }
  function twoPointChangeHandler(e, index) {
    dispatch(
      projectDataSliceActions.getPointTwo({
        value: e.target.value,
        id: index,
      })
    );
  }
  function threePointChangeHandler(e, index) {
    dispatch(
      projectDataSliceActions.getPointThree({
        value: e.target.value,
        id: index,
      })
    );
  }

  return (
    <section>
      <h3 className="fw-bolder mb-4 text-decoration-underline">Projects</h3>

      <div className="form-group mb-3">
        {projectsList.map((project, index) => (
          <div key={index} className="row education mb-4">
            <label htmlFor="education" className="fw-bold mb-1 fs-5">
              Project {index + 1}
            </label>
            <div className="mb-2 ">
              <input
                type="text"
                className="form-control fs-7 mb-2 fw-bold"
                placeholder="Project Name"
                onChange={(e) => projectNameChangeHandler(e, index)}
              />
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Point 1"
                onChange={(e) => onePointChangeHandler(e, index)}
              />
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Point 2"
                onChange={(e) => twoPointChangeHandler(e, index)}
              />
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Point 3"
                onChange={(e) => threePointChangeHandler(e, index)}
              />
            </div>
          </div>
        ))}

        <div className="p-0 text-end">
          {projectsList.length > 1 && (
            <button
              className="btn btn-danger me-3"
              onClick={projectRemoveHandler}
            >
              Remove
            </button>
          )}

          <button className="btn btn-primary" onClick={projectAddHandler}>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsInfo;
