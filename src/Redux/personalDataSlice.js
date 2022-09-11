import { createSlice } from "@reduxjs/toolkit";
const initialPersonalSliceState = { name: "", title: "", bio: "" };

const personalDataSlice = createSlice({
  name: "personalData",
  initialState: initialPersonalSliceState,
  reducers: {
    getName(state, action) {
      state.name = action.payload;
    },
    getTitle(state, action) {
      state.title = action.payload;
    },
    getBio(state, action) {
      state.bio = action.payload;
    },
  },
});

export const personalDataSliceActions = personalDataSlice.actions;

export default personalDataSlice;
