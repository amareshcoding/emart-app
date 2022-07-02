import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducer/index'

const store = configureStore({ reducer: rootReducer });
console.log('store: ', store);

export default store;