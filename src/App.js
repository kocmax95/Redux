import React from 'react';

// redux
import { createStore, combineReducers, bindActionCreators } from 'redux';
// redux-devtools
import { composeWithDevTools } from 'redux-devtools-extension'


const initialMovies = {
  listName:'Favourite',
  list: [
    'Rambo III', 'Hakerzy', 'Matrix'
  ]
}

const initialActors = {
  listName: 'Best',
  list: [
    'Tom Hanks', 'Julia Roberts', 'Angelina Jolie'
  ]
}

function movies(state = initialMovies, action){
  switch(action.type){
    case 'ADD_MOVIE':
      return{
        ...state, list:[...state.list, action.item]
      }
    case 'RESET_MOVIES':
      return {
        ...state, list: []
      }

    default: 
    return state
  }
}

function actors(state = initialActors, action){
  switch(action.type){
    case 'ADD_ACTOR':
      return{
        ...state, list:[...state.list, action.item]
      }
    case 'RESET_ACTORS':
      return {
        ...state, list: []
      }
    default: 
      return state
  }
}

const allReducers = combineReducers({movies, actors})
const store = createStore(allReducers, composeWithDevTools());

// Dodawanie nowego aktora
const addActor = item => ({type: 'ADD_ACTOR', item});
const resetActors = item => ({type: 'RESET_ACTORS', item})
store.dispatch(addActor('Cezary Pazura'))

const actorsActions = bindActionCreators({add: addActor, resetActors}, store.dispatch)
actorsActions.add('Jan Frycz')
actorsActions.resetActors()

window.store = store

class App extends React.Component {
  render(){
  return (
    <React.Fragment>

    </React.Fragment>
  );
  }
}

export default App;
