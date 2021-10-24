const selectors = {
    getCounter: state => state.counterReducers.counter,
    getActivity: state => state.counterReducers.activity
}

export { selectors }