const selectors = {
    getCounter: state => state.counterReducers.break,
    getActivity: state => state.counterReducers.activity
}

export { selectors }