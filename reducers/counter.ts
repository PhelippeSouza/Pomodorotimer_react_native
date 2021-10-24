import { actionsTypes } from '../constants/timer'

const INITIAL_STATE = {
    counter: 5,
    activity:25
}

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionsTypes.COUNTER_DECREMENT:
            return { ...state,  counter: state.counter - 1  }
            case actionsTypes.activity:
                return{...state, activity:state.activity - 1}
        case actionsTypes.COUNTER_INCREMENT:
            return { ...state, counter: state.counter + 1 }
        default:
            return state
    }
}

export { reducers }
