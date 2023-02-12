import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from "./loadingSlice";
import githubReducer from "./githubSlice";

export default configureStore({
    reducer: {
        loading: loadingReducer,
        github: githubReducer
    },
})
