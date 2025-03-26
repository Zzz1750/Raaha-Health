import { createSlice , PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    user:null,
    accessToken:null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },
        logout:(state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.accessToken=null;
            
        },
        refreshToken: (state , action ) => {
            state.accessToken = action.payload;
        }
    }
})

export const {login , logout ,refreshAccessToken} = authSlice.actions;
export default authSlice.reducer;