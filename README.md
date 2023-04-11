## MEARN Stack Ecommerce Application 
Simple ecommerce application that is built with the following technologies.
#### Backend Stack 
 - Express js & Nodejs
#### Database: 
 - MongoDB.
 #### Frontend Stack
 - ReactJS, Reduxjs & Bootstrap.
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
