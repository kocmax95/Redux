import React from 'react';

// redux
import { createStore } from 'redux';
// redux-devtools
import { composeWithDevTools } from 'redux-devtools-extension'
// główny reducer
import rootReducer from './reducers';

import { movieActions } from './app/movies/duck'

const store = createStore(rootReducer,composeWithDevTools());
window.store = store

store.dispatch(movieActions.add('Rambo V'));

class App extends React.Component {
  render(){
  return (
    <React.Fragment>

    </React.Fragment>
  );
  }
}

export default App;
