import { ADD_CART_ITEM, REMOVE_CART_ITEM, TOGGLE_QUANTITY } from "../constants/cartConstants";
const initialState = {
    cartItems: [], 
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CART_ITEM: 
            const item = action.payload
            
            const existItem = state.cartItems.find(product => product.id === item.id)

            if(existItem){
                return {
                    ...state, 
                    cartItems: state.cartItems.map(product => product.id === existItem.id ? item : product)
                }
            }else{
                return{
                    ...state, 
                    cartItems: [...state.cartItems, item]
                }
            }
        case REMOVE_CART_ITEM:
            const item1 = action.payload

            const items = [...state.cartItems]

            const filteredCart = items.filter(cartItem => cartItem.id !== item1.id)

            return {
                ...state, 
                cartItems: filteredCart
            }
        case TOGGLE_QUANTITY: 
            return {
                ...state, 
                cartItems: state.cartItems.map(cartItem => {
                    if(cartItem.id === action.payload.id){
                        if(action.payload.toggle === 'less'){
                            return (cartItem = {...cartItem, quantity: cartItem.quantity - 1 })
                        }
                        if(action.payload.toggle === 'more'){
                            console.log("reducer 1")
                            return (cartItem = {...cartItem, quantity: cartItem.quantity + 1 })
                        }
                    }
                    return cartItem
                })
            }

        default: 
            return state; 
    }


}