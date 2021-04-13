import { createSlice } from "@reduxjs/toolkit";
const ownerSlice = createSlice({
  name: "clientSlice",
  initialState: {
    currentClient: {},
    allCars: [],
    reservedCarWithreduction: [],
    reserverdCar: [],
    Error: "",
    Success: "",
    InfoSingleCar: {},
    InfoOwner: {},
  },
  reducers: {
    getProfileClient: (state = this.initialState, action) => {},
    esseyCar: (state = this.initialState, action) => {},
    ByCar: (state = this.initialState, action) => {},
    getByCar: (state = this.initialState, action) => {},
    getCheckout: (state = this.initialState, action) => {},
    setCheckout: (state = this.initialState, action) => {
      return {
        ...state,
        InfoSingleCar: action.payload.infoCar,
        InfoOwner: action.payload.infoOwner,
      };
    },
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
      const {
        currentClient,
        allCars,
        reservedCarWithreduction,
        reserverdCar,
      } = action.payload;
      return {
        ...state,
        currentClient,
        reserverdCar,
        reservedCarWithreduction,
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
  getCheckout,
  setCheckout,
  ByCar,
  getByCar,
} = ownerSlice.actions;
export default ownerSlice.reducer;
