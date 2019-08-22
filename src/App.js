import React from 'react';

// redux
import { createStore } from 'redux';
// redux-devtools
import { composeWithDevTools } from 'redux-devtools-extension'
// główny reducer
import rootReducer from './reducers';

import { movieActions } from './app/movies/duck'

import Menu from './app/menu/Menu'
import {Provider} from 'react-redux'

const store = createStore(rootReducer,composeWithDevTools());
window.store = store

store.dispatch(movieActions.add('Rambo V'));

class App extends React.Component {
  render(){
  return (
    <Provider store={store}>
      <Menu/>
    </Provider>
  );
  }
}

export default App;
