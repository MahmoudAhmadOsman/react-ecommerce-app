import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      //Check if item already exists
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      }
      //else create new item at the end of the list or item
      else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    //Remove from cart case or function
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

    default:
      return state;
  }
};
//5. add this to store.js
//6. then update the CartScreen component
