import types from './types';

export const add = item => ({
    type: types.ADD_MOVIE, item
})

export const reset = item => ({
    type: types.RESET_MOVIES, item
})

export default {
    add,
    reset
}
