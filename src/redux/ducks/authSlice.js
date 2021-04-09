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
    setRole: (state = this.initialState, action) => {
      return {
        ...state,
        role: action.payload,
      };
    },
    isLogedIn: (state = this.initialState, action) => {
      return {
        ...state,
        isAuthenticated: action.payload,
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

export const { authlogin, setRole, isLogedIn, ErrorLogin } = authSlice.actions;
export default authSlice.reducer;
