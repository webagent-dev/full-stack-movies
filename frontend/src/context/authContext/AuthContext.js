import { useReducer, createContext } from 'react'
import AuthReducer from './AuthReducer'
const initialState = {
    isFetching: false,
    isData: null,
    isError: false
}

export const AuthContext = createContext(initialState)


export const AuthContextProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(AuthReducer, initialState)
    return <AuthReducer.Provider
        value={{
            dispatch,
            fetching: state.isFetching,
            data: state.isData,
            error: state.isError
        }}
    >
        {children}
    </AuthReducer.Provider>
}