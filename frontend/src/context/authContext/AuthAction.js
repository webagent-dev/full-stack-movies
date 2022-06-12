export const loginStart = () => ({
    type: "Login_Start"
})
export const loginSuccess = (data) => ({
    type: "Login_Success",
    payload: data
})
export const loginFail = () => ({
    type: "Login_Fail"
})