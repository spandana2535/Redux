// store.js

import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../Reducers/Reducer';

const store = configureStore({
  reducer: {
    items: Reducer,
  },
});

export default store;
