import { createSlice } from "@reduxjs/toolkit";

const initialProjectDataSliceState = [
  {
    projectName: "",
    pointOne: "",
    pointTwo: "",
    pointThree: "",
  },
];

const projectDataSlice = createSlice({
  name: "projectData",
  initialState: initialProjectDataSliceState,
  reducers: {
    addProjectHandler(state, action) {
      state.push(action.payload);
    },
    removeProjectHandler(state, action) {
      state.pop();
    },

    getProjectName(state, action) {
      state[action.payload.id].projectName = action.payload.value;
    },
    getPointOne(state, action) {
      state[action.payload.id].pointOne = action.payload.value;
    },
    getPointTwo(state, action) {
      state[action.payload.id].pointTwo = action.payload.value;
    },
    getPointThree(state, action) {
      state[action.payload.id].pointThree = action.payload.value;
    },
  },
});

export const projectDataSliceActions = projectDataSlice.actions;

export default projectDataSlice;
