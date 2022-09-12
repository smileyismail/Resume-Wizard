import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { coursesDataSliceActions } from "../../Redux/coursesDataSlice";

const CoursesInfo = () => {
  const dispatch = useDispatch();
  const coursesList = useSelector((state) => state.coursesData);

  function courseAddHandler() {
    if (coursesList.length === 3) {
      alert("You can add only 3 Courses");
      return;
    }
    dispatch(
      coursesDataSliceActions.addCourseHandler({
        courseName: "",
        platform: "",
      })
    );
  }
  function courseRemoveHandler() {
    dispatch(coursesDataSliceActions.removeCourseHandler());
  }

  function courseNameChangeHandler(e, index) {
    dispatch(
      coursesDataSliceActions.getCourseName({
        value: e.target.value,
        id: index,
      })
    );
  }
  function platformChangeHandler(e, index) {
    dispatch(
      coursesDataSliceActions.getPlatform({
        value: e.target.value,
        id: index,
      })
    );
  }

  return (
    <section>
      <h3 className="fw-bolder mb-4 text-decoration-underline">Courses</h3>

      <div className="form-group mb-3">
        {coursesList.map((course, index) => (
          <div key={index} className="row education mb-4">
            <label htmlFor="education" className="fw-bold mb-1 fs-5">
              Course {index + 1}
            </label>
            <div className="d-flex flex-sm-row flex-column">
              <input
                type="text"
                name="courseName"
                className="form-control mb-sm-0 mb-2 me-2"
                placeholder="Course Name"
                onChange={(e) => courseNameChangeHandler(e, index)}
              />
              <input
                type="text"
                name="university"
                className="form-control"
                placeholder="Platform Name"
                onChange={(e) => platformChangeHandler(e, index)}
              />
            </div>
          </div>
        ))}

        <div className="p-0 text-end">
          {coursesList.length > 1 && (
            <button
              className="btn btn-danger me-3"
              onClick={courseRemoveHandler}
            >
              Remove
            </button>
          )}

          <button className="btn btn-primary" onClick={courseAddHandler}>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesInfo;
