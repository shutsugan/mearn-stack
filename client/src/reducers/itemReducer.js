import {ITEMS_LOADING, GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';

const initialState = {
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      }
      break;
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
      break;
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
      break;
    case ITEMS_LOADING:
      return{
        ...state,
        loading: true
      };
      break;
    default:
      return state;
  }
}
