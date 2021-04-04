import React, { useState } from 'react';
import { AppRoutes } from './AppRoutes';
import { UserContext } from './UserContext';

export const MainApp = () => {

    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <div>
                {/* <h1>MainApp</h1>
                <hr/> */}
                <AppRoutes />
            </div>
        </UserContext.Provider>
    )
}
