import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authslice",
  initialState: {
    isAuthenticated: false,
    role: "",
    ErrorAuth: "",
  },
  reducers: {
    authlogin: (state = this.initialState, action) => {},
    authregister: (state = this.initialState, action) => {},
    authlogout: (state = this.initialState, action) => {},
    ifLogedIn: (state = this.initialState, action) => {},
    isLogedIn: (state = this.initialState, action) => {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        role: action.payload.role,
        ErrorAuth: "",
      };
    },
    ErrorLogin: (state = this.initialState, action) => {
      return {
        ...state,
        ErrorAuth: action.payload,
      };
    },
  },
});

export const {
  authlogin,
  authregister,
  authlogout,
  isLogedIn,
  ErrorLogin,
  ifLogedIn,
} = authSlice.actions;
export default authSlice.reducer;
