import { handleCart } from './reducer.cart';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  cart: handleCart,
});
export default rootReducers;
