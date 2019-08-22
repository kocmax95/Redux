import types from './types';
const INITIAL_STATE = {
    correspondenceIsVisible: false,
    taskIsVisible: false
  }

  const menuReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.SHOW_CORRESPONDENCE:
            return{
                ...state, correspondenceIsVisible: true
            }
        case types.HIDE_CORRESPONDENCE:
            return {
                ...state, correspondenceIsVisible: false
            }
        case types.SHOW_TASK:
            return {
                ...state, taskIsVisible: true
            }
        case types.HIDE_TASK:
            return {
                ...state, taskIsVisible: false
            }
        default: 
            return state
    }
  }

  export default menuReducer;
