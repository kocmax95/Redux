import { combineReducers } from 'redux';
import actorsReducer from './app/actors/duck';
import moviesReducer from './app/movies/duck';
import menuReducers from './app/menu/duck'

const rootReducer = combineReducers({
    actors: actorsReducer,
    movies: moviesReducer,
    menu: menuReducers
})

export default rootReducer;
