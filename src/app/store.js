import { configureStore } from '@reduxjs/toolkit';
import detectivesReducer from '../features/detectivesSlice';
import recordsReducer from '../features/recordsSlice';

export default configureStore({
  reducer: {
    detectives: detectivesReducer,
    records: recordsReducer
  }
})