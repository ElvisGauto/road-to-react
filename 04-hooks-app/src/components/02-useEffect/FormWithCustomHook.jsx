import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css';

export const FormWithCustomHook = () => {

    const [ formValues, handleInputOnChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const handleSubmit = (e) => { 
        e.preventDefault();

        console.log(formValues);
    }

    useEffect(() => {
        console.log('email cambió');
    }, [email])

    return (
        <form onSubmit={ handleSubmit }>
            <h1>Use Effect: FormWithCustomHook</h1>
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

            <div className="form-group">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="******"
                    autoComplete="off"
                    value={password}
                    onChange={ handleInputOnChange }
                />
            </div>

            <button 
                type="submit"
                className="btn btn-primary"
            >Submit</button>
        </form>
    )
}
