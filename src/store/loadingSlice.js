import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        loading: false
    },
    reducers: {
        startLoading: (state) =>{
            state.loading = true;
        },
        stopLoading: (state)  => {
            state.loading = false;
        }
    },
})

// Action creators are generated for each case reducer function
export const { startLoading, stopLoading } = loadingSlice.actions

export default loadingSlice.reducer
