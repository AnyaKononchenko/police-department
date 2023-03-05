import { createSlice, current } from "@reduxjs/toolkit";
import { records, NOT_ASSIGNED } from "../data/data";

export const recordsSlice = createSlice({
  name: "records",
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
      const foundRecord = records.find((record) => record.id === action.payload.id);
      if (foundRecord) {
        foundRecord.id = action.payload.id;
        foundRecord.name = action.payload.name;
        foundRecord.details = action.payload.details;
        foundRecord.status = action.payload.status;
        foundRecord.assigned = action.payload.assigned;
      }
    },
    updateAssigned: (state, action) => {
      const {records} = state;
      const foundRecord = records.find((record) => record.id === action.payload);
      if(foundRecord){
        foundRecord.assigned = foundRecord.status !== 'closed' ? NOT_ASSIGNED : foundRecord.status;
      }
      console.log(current(foundRecord));
    }
  }
});

export const { createCase, updateCase, updateAssigned } = recordsSlice.actions;
export default recordsSlice.reducer;