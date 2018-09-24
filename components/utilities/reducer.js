import { RECEIVED_DATA, REQUESTED_DATA, SAVE_DRINK, DELETE_DRINK } from './constants';

const initialState = {
  doneLoading: false,
  drinks: [],
  savedDrinks: [],
  deletedDrinks: [],
  users: [
    { username: 'lulucash', email: 'lcardena9@gmail.com' }
  ],
  page: 'SIGN_IN'
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return { ...state, page: action.newPage }
    case 'NEW_USER':
      return {
        ...state,
        page: 'USER_PAGE',
        users: [...state.users, action.newUser]
      }
    case RECEIVED_DATA:
      return {
        ...state,
        drinks: action.payload,
        doneLoading: true
      }
    case REQUESTED_DATA:
      return { ...state, doneLoading: false }
    case SAVE_DRINK:
      return {
        ...state,
        savedDrinks: [...state.savedDrinks, action.payload]
      }
      case DELETE_DRINK:
      const currentDrinkToDelete = [state.savedDrinks];
      const indexToDelete = currentDrinkToDelete.findIndex(function(drink){
        return drink.idDrink === action.payload.idDrink; 
      }); 
      return{
        ...state,
        savedDrinks: {savedDrinks:[...currentDrinkToDelete.slice(0, indexToDelete),
        ...currentDrinkToDelete.slice(indexToDelete + 1)]
      },
    }
    default:
      return state;
  }
}

export default rootReducer;