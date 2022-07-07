import { configureStore } from '@reduxjs/toolkit'
import { tickReducer } from '../features/tickSlice'

export default configureStore({
  reducer: {
    tick: tickReducer
  }
})