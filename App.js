import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './components/utilities/reducer';
import MainPage from './components/mainPage';
import thunk from 'redux-thunk';
import { createStackNavigator } from 'react-navigation';

import SignUp from './components/pages/signUp';
import UserPage from './components/pages/userPage';
import SignIn from './components/pages/signIn';
import SearchResults from './components/pages/searchResults';
import RecipePage from './components/pages/recipePage';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

const RootStack = createStackNavigator(
  {
    Home: MainPage,
    SignUp: SignUp,
    UserPage: UserPage,
    SignIn: SignIn,
    SearchResults: SearchResults,
    RecipePage: RecipePage
  }, {
    initialRouteName: 'SignIn'
  }
)

const App = () => (
  <Provider store={store}>

    <RootStack />

  </Provider>
);

export default App;