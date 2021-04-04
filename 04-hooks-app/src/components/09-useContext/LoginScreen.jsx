import React, { useContext } from 'react';
import { UserContext }  from './UserContext';

export const LoginScreen = () => {

    // use context busca en el arbol de componentes lo que
    // estemos refiriendo por parametro
    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={ () => setUser({
                    id: 123,
                    name: 'Juancito'
                }) }
            >
                Login
            </button>
        </div>
    )
}
