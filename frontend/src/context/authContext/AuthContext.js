import { useReducer, createContext } from 'react'
import AuthReducer from './AuthReducer'
const initialState = {
    isFetching: false,
    isData: null,
    isError: null
}

export const AuthContext = createContext(initialState)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)
    return <AuthContext.Provider
        value={{
            fetching: state.isFetching,
            data: state.isData,
            error: state.isError,
            dispatch
        }}
    >
        {children}
    </AuthContext.Provider>
}