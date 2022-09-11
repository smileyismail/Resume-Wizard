import { createSlice } from "@reduxjs/toolkit";

const initialSkillsDataSliceState = [
  {
    skillName: "",
    range: "",
  },
];

const skillsDataSlice = createSlice({
  name: "skillsData",
  initialState: initialSkillsDataSliceState,
  reducers: {
    addSkillHandler(state, action) {
      state.push(action.payload);
    },
    removeSkillHandler(state, action) {
      state.pop();
    },
    getSkillName(state, action) {
      state[action.payload.id].skillName = action.payload.value;
    },
    getRange(state, action) {
      state[action.payload.id].range = action.payload.value;
    },
  },
});

export const skillsDataSliceActions = skillsDataSlice.actions;

export default skillsDataSlice;
