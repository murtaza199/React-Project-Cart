import {ADD_TO_CART,REMOVE_TO_CART} from '../Constants'

const initialState = {
  cartData: [],
};

export default function cartItems(state=[], action) {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("reducer",action)
      return [...state, 
        {cartData: action.data} ]
        break;
        case REMOVE_TO_CART: state.pop()
      // console.log("reducer",action)
      return [...state, 
        ]
        break;
        default:
            return state;
  }
}
