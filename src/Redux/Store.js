import { configureStore } from "@reduxjs/toolkit";

import personalDataSlice from "./personalDataSlice";
import contactDataSlice from "./contactDataSlice";
import educationDataSlice from "./educationDataSlice";
import coursesDataSlice from "./coursesDataSlice";
import skillsDataSlice from "./skillsDataSlice";
import projectDataSlice from "./projectDataSlice";

const store = configureStore({
  reducer: {
    personalData: personalDataSlice.reducer,
    contactData: contactDataSlice.reducer,
    educationData: educationDataSlice.reducer,
    coursesData: coursesDataSlice.reducer,
    skillsData: skillsDataSlice.reducer,
    projectsData: projectDataSlice.reducer,
  },
});

export default store;
