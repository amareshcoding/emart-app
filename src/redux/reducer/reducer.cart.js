import { actionTypes } from '../action/action';

const initialState = {
  cart: [],
};

export const handleCart = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADDITEM: {
      //Check if Product is Already Exist
      const exist = state.cart.find((item) => item.id === payload.id);
      if (exist) {
        //Increase the Quantity
        const updateQuantity = state.cart.map((item) =>
          item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
        );
        return {
          ...state,
          cart: updateQuantity,
        };
      } else {
        //Add a new cart item
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...payload,
              qty: 1,
            },
          ],
        };
      }
    }
    case actionTypes.DELITEM: {
      const exist1 = state.cart.find((item) => item.id === payload.id);
      if (exist1.qty === 1) {
        const deleteItem = state.cart.filter((item) => item.id !== payload.id);
        return {
          ...state,
          cart: deleteItem,
        };
      } else {
        const decreaseQty = state.cart.map((item) =>
          item.id === payload.id ? { ...item, qty: item.qty - 1 } : item
        );
        return {
          ...state,
          cart: decreaseQty,
        };
      }
    }

    default:
      return state;
  }
};
