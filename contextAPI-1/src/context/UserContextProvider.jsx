import React , {useState} from 'react'
import UserContext from './userContext.js'

// Once you've created a context object, you need to wrap the components that need access to the shared data with a Provider component. The Provider component accepts a "value" prop that holds the shared data, and any component that is a child of the Provider component can access that shared data.

const UserContextProvider = ({children}) => {

    const [user , setUser] = useState(null)

    return (
        <>
            <UserContext.Provider value={{user , setUser}}>
            {children}
            </UserContext.Provider>
            
        
        </>
    )
}

export default UserContextProvider;