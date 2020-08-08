const initialState = {
    isLoggedIn: false,
    user: null,
}


// const mapStateToProps = state => ({
//     user_id: state.jesseReducer.user_id,
//     fname: state.jesseReducer.fname,
//     lname: state.jesseReducer.lname,
//     category: state.jesseReducer.category,
//     email: state.jesseReducer.email,
//     balance: state.jesseReducer.balance,
//     date_last_payment: state.jesseReducer.date_last_payment,
//     withdrawal_status: state.jesseReducer.withdrawal_status,
// });

const jesseReducer = (state = initialState, action) => {
    // console.log(state.user);
    switch (action.type) {
        case 'JESSE':
            return {
                isLoggedIn: true,
                user: action.user,
            };

        default:
            // return {
            //     user_id: state.user.fname,
            //     fname: state.user.fname,
            //     lname: state.user.lname,
            //     category: state.user.category,
            //     email: state.user.email,
            //     balance: state.user.balance,
            //     date_last_payment: state.user.date_last_payment,
            //     withdrawal_status: state.user.withdrawal_status,
            // }

            return state;
    }
}

export default jesseReducer;