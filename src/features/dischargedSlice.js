import { createSlice, current } from "@reduxjs/toolkit";
import { dischargedDetectives } from "../data/data";

export const dischargedSlice = createSlice({
  name: 'discharged',
  initialState: {
    discharged: dischargedDetectives
  },
  reducers: {
    addDischarged: (state, action) => {
      state.discharged.push(action.payload);
    }
  }
});

export const { addDischarged } = dischargedSlice.actions;
export default dischargedSlice.reducer;