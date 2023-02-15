export const actionTypes = {
  ADDITEM: 'ADDITEM',
  DELITEM: 'DELITEM',
  CHANGEQTY: 'CHANGEQTY',
};

//For Add Item to Cart
export const addCart = (product) => {
  return {
    type: actionTypes.ADDITEM,
    payload: product,
  };
};

//change quantity
export const changeQty = (changeType, producrId) => {
  return {
    type: actionTypes.CHANGEQTY,
    payload: {
      producrId,
      changeType,
    },
  };
};

//For Delete Item to Cart
export const delCart = (producrId) => {
  return {
    type: actionTypes.DELITEM,
    payload: producrId,
  };
};
