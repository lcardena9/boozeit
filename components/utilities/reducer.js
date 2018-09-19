import { RECEIVED_DATA } from './constants';

const initialState = {
  doneLoading: false,
  drinks: [],
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
    default:
      return state;
  }
}

export default rootReducer;