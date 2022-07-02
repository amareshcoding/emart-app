//For Add Item to Cart

export const ADDITEM = "ADDITEM";

export const addCart = (product) => {
     return{
          type : ADDITEM,
          payload : product
     }
}

//For Delete Item to Cart

export const DELITEM = "DELITEM";

export const delCart = (product) => {
     return{
          type : DELITEM,
          payload : product
     }
}