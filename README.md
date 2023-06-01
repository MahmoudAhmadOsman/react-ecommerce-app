## MEARN Stack eCommerce Application 
This repository contains a React-based ecommerce application that allows users to browse and purchase products online. The app provides a user-friendly interface for customers to explore various products, add them to their shopping cart, and proceed to the checkout process.
#### Backend Stack 
 - Expressjs & Nodejs
#### Database: 
 - MongoDB
 - Mongoosejs (data modeling)
 #### Frontend Stack
 - Reactjs, Reduxjs & Bootstrap.
______________________________________________________________________________

### Cart Reducer Class
 ``` bash
 export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;
			const existItem = state.cartItems.find((x) => x.product === item.product);

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === existItem.product ? item : x
					),
				};
			}
			else {
				return { ...state, cartItems: [...state.cartItems, item] };
			}

		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter((x) => x.product !== action.payload),
			};

	
		case CART_EMPTY:
			return { ...state, cartItems: [] };

		default:
			return state;
	}
};


 
 ```
