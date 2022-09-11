import { createSlice } from "@reduxjs/toolkit";

const initialContactSliceState = {
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  personal: "",
};

const contactDataSlice = createSlice({
  name: "contactData",
  initialState: initialContactSliceState,
  reducers: {
    getEmail(state, action) {
      state.email = action.payload;
    },
    getPhone(state, action) {
      state.phone = action.payload;
    },
    getLinkedin(state, action) {
      state.linkedin = action.payload;
    },
    getGithub(state, action) {
      state.github = action.payload;
    },
    getPersonal(state, action) {
      state.personal = action.payload;
    },
  },
});

export const contactDataSliceActions = contactDataSlice.actions;

export default contactDataSlice;
