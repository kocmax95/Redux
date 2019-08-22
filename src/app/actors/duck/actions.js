import types from './types'


export const add = item => ({
    type: types.ADD_ACTOR, item
});

export const reset = item => ({
    type: types.RESET_ACTORS, item
});

export default {
    add,
    reset
}
