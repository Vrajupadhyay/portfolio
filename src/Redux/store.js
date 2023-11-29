import { configureStore } from "@reduxjs/toolkit";

import TechSliceReducer from './Slices/TechSlice';
import AuthSliceReducer from './Slices/AuthSlice';
import ProjectSliceReducer from "./Slices/ProjectSlice";


const store = configureStore({
    reducer: {
        techstack: TechSliceReducer,
        auth: AuthSliceReducer,
        project: ProjectSliceReducer
    },
    devTools: true
});

export default store;