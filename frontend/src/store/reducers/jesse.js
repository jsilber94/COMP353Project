const initialState = {
    isLoggedIn: false,
    user: null,
}

const jesseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'JESSE':
            return {
                isLoggedIn: true,
                user: action.user,
            };

        default:
            return state;
    }

}

export default jesseReducer;