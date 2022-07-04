
const actionTypes = {
     ADDITEM : "ADDITEM",
     DELITEM : "DELITEM"
}


//For Add Item to Cart

export const addCart = (product) => {
     return{
          type : actionTypes.ADDITEM,
          payload : product
     }
}

//For Delete Item to Cart

export const delCart = (product) => {
     return{
          type : actionTypes.DELITEM,
          payload : product
     }
}