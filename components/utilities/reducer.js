const initialState = {
  isloading: false,  
  users: [
      { username: 'hi', email: 'hi@gmail.com' },
      { username: 'hi', email: 'hi@gmail.com' },
      { username: 'hi', email: 'hi@gmail.com' }
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
      default:
        return state;
    }
  }
  
  export default rootReducer;