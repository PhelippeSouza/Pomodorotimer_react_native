import { actionsTypes } from '../constants/timer'

const actions = {
    decrement: () => ({
        type: actionsTypes.COUNTER_DECREMENT
    }),
    increment: () => ({
        type: actionsTypes.COUNTER_INCREMENT
    }),

    activity: () => ({
        type: actionsTypes.activity
    })
}

export { actions }
