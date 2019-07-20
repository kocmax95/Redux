import types from './types'


const addActor = item => ({
    type: types.ADD_ACTOR, item
});

const resetActors = item => ({
    type: types.RESET_ACTORS, item
});

export default {
    add,
    reset
}
