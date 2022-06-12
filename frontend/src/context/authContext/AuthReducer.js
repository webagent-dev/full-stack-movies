const AuthReducer = (state, action) => {
    switch (action.type) {
        case "Login_Start":
            return {
                isFetching: true,
                isData: null,
                isError: false
            }
        case "Login_Success":
            return {
                isFetching: false,
                isData: action.payload,
                isError: false
            }
        case "Login_Fail":
            return {
                isFetching: false,
                isData: null,
                isError: true
            }
        default:
            return {...state}
    }
}


export default AuthReducer