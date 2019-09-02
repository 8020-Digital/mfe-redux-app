const INITIAL_STATE = {
    home: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_HOME':
            return { ...state, home: action.payload }
        default:
            return (state);
    }
};
