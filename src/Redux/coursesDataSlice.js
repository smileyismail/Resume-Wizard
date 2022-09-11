import { createSlice } from "@reduxjs/toolkit";

const initialCOursesDataSliceState = [
  {
    courseName: "",
    platform: "",
  },
];

const coursesDataSlice = createSlice({
  name: "coursesDataSlice",
  initialState: initialCOursesDataSliceState,
  reducers: {
    addCourseHandler(state, action) {
      state.push(action.payload);
    },
    removeCourseHandler(state, action) {
      state.pop();
    },
    getCourseName(state, action) {
      state[action.payload.id].courseName = action.payload.value;
    },
    getPlatform(state, action) {
      state[action.payload.id].platform = action.payload.value;
    },
  },
});

export const coursesDataSliceActions = coursesDataSlice.actions;

export default coursesDataSlice;
