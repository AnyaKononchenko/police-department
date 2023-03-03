import { createSlice, current } from "@reduxjs/toolkit";
import { records } from "../data/data"

export const recordsSlice = createSlice({
  name: "department",
  initialState: {
    records
  },
  reducers: {
    createCase: (state, action) => {
      const { records } = state;
      records.push(action.payload);
    },
    updateCase: (state, action) => {
      const { records } = state;
      let foundCase = records.find((record) => record.id === action.payload.id);
      if (foundCase) {
        foundCase.id = action.payload.id;
        foundCase.name = action.payload.name;
        foundCase.details = action.payload.details;
        foundCase.status = action.payload.status;
        foundCase.assigned = action.payload.assigned;
      }
    }
  }
})

export const { createCase, updateCase } = recordsSlice.actions;
export default recordsSlice.reducer;