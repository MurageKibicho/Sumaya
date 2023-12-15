import { configureStore } from '@reduxjs/toolkit'
import { HomeReducerSlice } from '../Pages/HomePage/Redux/HomeReducer';
import { ReduxApi } from './ReduxApi';
export default configureStore({
  reducer: 
  {
    HomeReducer : HomeReducerSlice.reducer,
    [ReduxApi.reducerPath] : ReduxApi.reducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(ReduxApi.middleware)


})