import { createSlice } from "@reduxjs/toolkit";
const ownerSlice = createSlice({
  name: "clientSlice",
  initialState: {
    currentClient: {},
    allCars: [],
  },
  reducers: {
    getProfileClient: (state = this.initialState, action) => {},
    dataProfile: (state = this.initialState, action) => {
      const { currentClient, allCars } = action.payload;
      return {
        ...state,
        currentClient,
        allCars,
      };
    },
  },
});

export const { getProfileClient, dataProfile } = ownerSlice.actions;
export default ownerSlice.reducer;
