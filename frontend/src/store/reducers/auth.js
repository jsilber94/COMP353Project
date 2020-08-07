const initialState = {
    isLoggedIn: false,
    role: null,
    id: null
};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                isLoggedIn: true,
                role: action.role,
                id: action.id,
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default authenticationReducer;