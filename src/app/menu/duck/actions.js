import types from './types';

// const showCorrespondence = ({
//     type: types.SOHW_CORRESPONDENCE
// })

export const showCorrespondence = () =>
    ({
        type: types.SHOW_CORRESPONDENCE
    })

// const hideCorrespondence = ({
//     type: types.HIDE_CORRESPONDENCE
// })
    
export const hideCorrespondence = () =>
    ({
        type: types.HIDE_CORRESPONDENCE
    })


export const showTask = ({
    type: types.SHOW_TASK
})

export const hideTask = ({
    type: types.HIDE_TASK
})

export default {
    showCorrespondence,
    hideCorrespondence,
    showTask,
    hideTask
}
