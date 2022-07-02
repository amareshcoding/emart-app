import { ADDITEM, DELITEM } from "../action/action";


const cart = [];

export const handleCart = (state = cart, {type, payload}) => {
     const product = payload;
     // console.log('product: ', product);
     switch(type){
          case ADDITEM:
               //Check if Product is Already Exist
               const exist = state.find((x) => x.id === product.id);
               // console.log('exist: ', exist);
               if(exist){
                    //Increase the Quantity
                    return state.map((x) => x.id === product.id ? {...x, qty: (x.qty + 1)} : x);
               }else{
                    const product = payload;
                    return [
                         ...state,
                         {
                              ...product,
                              qty: 1,
                         }
                    ]
               }
               
          case DELITEM:
               const exist1 = state.find((x) => x.id === product.id);
               if(exist1.qty === 1){
                    return state.filter((x) => x.id !== product.id);
               }else{
                    return state.map((x) => x.id === product.id ? {...x, qty: x.qty - 1} : x);
               }
               
          default:
               return state;
          

     }
}