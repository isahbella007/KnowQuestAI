import {createSlice} from '@reduxjs/toolkit'

const initialState = { 
    isLoading: false
}

const slice = createSlice({ 
    name: 'app', 
    initialState, 
    reducers: { 
        // START LOADING
        startAppLoading(state){ 
            state.isLoading = true
        }, 

        endAppLoading(state) {
            state.isLoading = false;
          },
    }
})

export default slice.reducer

export const {startAppLoading, endAppLoading} = slice.actions