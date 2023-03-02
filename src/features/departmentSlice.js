import { createSlice, current } from "@reduxjs/toolkit";
import { cases, detectives } from "../data/data"

export const departmentSlice = createSlice({
    name: "department",
    initialState: {
        cases,
        detectives
    },
    reducers: {
        createCase: (state, action) => {
            const { cases } = state;
            cases.push(action.payload);
        },
        updateCase: (state, action) => {
            const { cases } = state;
            console.log(action.payload)
            let foundCase = cases.find((item) => item.id === action.payload.id);
            console.log(current(foundCase));
            if(foundCase){
                // foundCase = {...action.payload}
                foundCase.id = action.payload.id;
                foundCase.name = action.payload.name;
                foundCase.details = action.payload.details;
                foundCase.status = action.payload.status;
                foundCase.assigned = action.payload.assigned;
            }
        },
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
    }
})

export const { createCase, updateCase, addDetective, updateDetective } = departmentSlice.actions;
export default departmentSlice.reducer;