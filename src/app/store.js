import { configureStore } from '@reduxjs/toolkit'
import departmentReducer from '../features/departmentSlice'

export default configureStore({
  reducer: {
    departmentR : departmentReducer
  }
})