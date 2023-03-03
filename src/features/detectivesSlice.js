import { createSlice, current } from "@reduxjs/toolkit";
import { detectives } from "../data/data"

export const detectivesSlice = createSlice({
    name: "department",
    initialState: {
        detectives
    },
    reducers: {
        addDetective: (state, action) => {
            const { detectives } = state;
            detectives.push(action.payload)
        },
        updateDetective: (state, action) => {
            const { detectives } = state;
            const detective = detectives.find((detective) => detective.id === action.payload.id);
            if(detective){
                detective.name = action.payload.name;
            }
        },
        deleteDetective: (state, action) => {
            const { detectives } = state;
            return detectives.filter((detective) => detective.id !== action.payload);
        },
    }
})

export const { createCase, updateCase, addDetective, updateDetective, deleteDetective } = detectivesSlice.actions;
export default detectivesSlice.reducer;