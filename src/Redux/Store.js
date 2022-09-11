import { configureStore } from "@reduxjs/toolkit";

import personalDataSlice from "./personalDataSlice";
import contactDataSlice from "./contactDataSlice";
import educationDataSlice from "./educationDataSlice";
import coursesDataSlice from "./coursesDataSlice";
import skillsDataSlice from "./skillsDataSlice";

const store = configureStore({
  reducer: {
    personalData: personalDataSlice.reducer,
    contactData: contactDataSlice.reducer,
    educationData: educationDataSlice.reducer,
    coursesData: coursesDataSlice.reducer,
    skillsData: skillsDataSlice.reducer,
  },
});

export default store;
