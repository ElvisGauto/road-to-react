import React, { useState, useEffect } from 'react';

import { Message } from './Message';

import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('first use effect');
    }, []);

    useEffect(() => {
        // console.log('form state changes');
    }, [formState]);

    useEffect(() => {
        // console.log('email changes');
    }, [email]);

    const handleInputOnChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    return (
        <div>
            <h1>Use Effect: Simple Form</h1>
            <hr/>

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={ handleInputOnChange }
                />
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={email}
                    onChange={ handleInputOnChange }
                />
            </div>

            { (name ===  '123')  &&  <Message /> }

        </div>
    )
}
