
const AuthReducer = (state, action) => {
    switch (action.type) {
        case "Login_Start":
            return {
                isFetching: true,
                isData: null,
                isError: null
            }
        case "Login_Success":
            return {
                isFetching: false,
                isData: action.payload,
                isError: null
            }
        case "Login_Fail":
            return {
                isFetching: false,
                isData: null,
                isError: null
            }
        default:
            return {...state}
    }
}


export default AuthReducer