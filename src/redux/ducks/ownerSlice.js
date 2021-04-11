import { createSlice } from "@reduxjs/toolkit";
const ownerSlice = createSlice({
  name: "ownerSlice",
  initialState: {
    Owner: {},
    ownerCars: [],
    reserveCars: [],
    reserveCarReduction: [],
  },
  reducers: {
    getProfileInfo: (state = this.initialState, action) => {},
    addCar: (state = this.initialState, action) => {},
    relodCars: (state = this.initialState, action) => {
      return {
        ...state,
        ownerCars: action.payload,
      };
    },
    ProfileInfo: (state = this.initialState, action) => {
      const {
        Owner,
        ownerCars,
        reserveCars,
        reserveCarReduction,
      } = action.payload;
      return {
        ...state,
        Owner,
        reserveCars,
        ownerCars,
        reserveCarReduction,
      };
    },
  },
});

export const {
  ProfileInfo,
  getProfileInfo,
  addCar,
  relodCars,
} = ownerSlice.actions;
export default ownerSlice.reducer;
