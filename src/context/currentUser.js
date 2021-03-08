import React, {createContext, useState} from 'react';

import AuthService from '../services/AuthService'

export const UserContext = createContext();

function UserContextProvider(props){

    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

return (
    <UserContext.Provider value={{...props, currentUser, setCurrentUser}}>
        {props.children}

    </UserContext.Provider>

)

}

export default UserContextProvider;