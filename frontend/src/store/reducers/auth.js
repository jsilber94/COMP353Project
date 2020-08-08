const initialState = {
    isLoggedIn: false,
    role: null,
    id: null,
    category: null,
};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                isLoggedIn: true,
                role: action.role,
                id: action.id,
                category: action.category
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default authenticationReducer;
