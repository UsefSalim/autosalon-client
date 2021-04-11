import { createSlice } from "@reduxjs/toolkit";
const ownerSlice = createSlice({
  name: "clientSlice",
  initialState: {
    currentClient: {},
    allCars: [],
    Error: "",
    Success: "",
  },
  reducers: {
    getProfileClient: (state = this.initialState, action) => {},
    esseyCar: (state = this.initialState, action) => {},
    Error: (state = this.initialState, action) => {
      return {
        ...state,
        Error: action.payload,
        Success: "",
      };
    },
    Success: (state = this.initialState, action) => {
      return {
        ...state,
        Success: action.payload,
        Error: "",
      };
    },
    dataProfile: (state = this.initialState, action) => {
      const { currentClient, allCars } = action.payload;
      return {
        ...state,
        currentClient,
        allCars,
        Error: "",
        Success: "",
      };
    },
  },
});

export const {
  getProfileClient,
  dataProfile,
  esseyCar,
  Error,
  Success,
} = ownerSlice.actions;
export default ownerSlice.reducer;
