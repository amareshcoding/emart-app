import { actionTypes } from '../action/action';

const initialState = {
  products: [],
};

export const handleCart = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADDITEM: {
      //Check if Product is Already Exist
      const exist = state.products.find((item) => item.id === payload.id);
      if (exist) {
        //Increase the Quantity
        const updateQuantity = state.products.map((item) =>
          item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
        );
        return {
          ...state,
          products: updateQuantity,
        };
      } else {
        //Add a new products item
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...payload,
              qty: 1,
            },
          ],
        };
      }
    }
    case actionTypes.DELITEM: {
      const deleteItem = state.products.filter((item) => item.id !== payload);
      return {
        ...state,
        products: deleteItem,
      };
    }
    case actionTypes.CHANGEQTY: {
      if (payload.changeType === 'inc') {
        const incQty = state.products.map((item) =>
          item.id === payload.producrId ? { ...item, qty: item.qty + 1 } : item
        );
        return {
          ...state,
          products: incQty,
        };
      } else {
        const foundProduct = state.products.find(
          (item) => item.id === payload.producrId
        );
        if (foundProduct.qty !== 1) {
          const decQty = state.products.map((item) =>
            item.id === payload.producrId
              ? { ...item, qty: item.qty - 1 }
              : item
          );
          return {
            ...state,
            products: decQty,
          };
        } else {
          return { ...state };
        }
      }
    }

    default:
      return state;
  }
};
