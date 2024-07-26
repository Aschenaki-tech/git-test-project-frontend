// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import songsReducer from '../features/songsSlice';

const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
});

export default store;