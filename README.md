## MEARN stack ecommerce web application
This application is an ecommerce simple demp that is built with the following technologies. Backend technologies are: Express js, MongoDB and Nodejs. Frontend technologies are: React js, Redux js & Bootstrap.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

		case CART_SAVE_SHIPPING_ADDRESS:
			return {
				...state,
				shippingAddress: action.payload,
			};
	
		case CART_SAVE_PAYMENT_METHOD:
			return {
				...state,
				paymentMethod: action.payload,
			};
	
		case CART_EMPTY:
			return { ...state, cartItems: [] };

		default:
			return state;
	}
};


 
 ```
