import { createSlice } from "@reduxjs/toolkit";

const initialEducationSliceState = [
  {
    degree: "",
    university: "",
    startYear: "",
    endYear: "",
  },
];
const educationDataSlice = createSlice({
  name: "educationData",
  initialState: initialEducationSliceState,
  reducers: {
    addEduHandler(state, action) {
      state.push(action.payload);
    },
    removeEduHandler(state, action) {
      state.pop();
    },
    getDegree(state, action) {
      state[action.payload.id].degree = action.payload.value;
    },
    getUniversity(state, action) {
      state[action.payload.id].university = action.payload.value;
    },
    getStartYear(state, action) {
      state[action.payload.id].startYear = action.payload.value;
    },
    getEndYear(state, action) {
      state[action.payload.id].endYear = action.payload.value;
    },
  },
});

export const educationDataSliceActions = educationDataSlice.actions;

export default educationDataSlice;
