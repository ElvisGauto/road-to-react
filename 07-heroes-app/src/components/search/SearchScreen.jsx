import React, { useMemo } from 'react';

import queryString from 'query-string';

import { HeroCard } from '../heroes/HeroCard';

import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router';
import { getHeroesByName } from '../selectors/GetHeroesByName';


export const SearchScreen = ({ history }) => {

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [ formValues,  handleInputOnChange ] = useForm({
        hero: q
    });

    const { hero } = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName( q ), [ q ]);

    const handleSearch = (e) => {
        e.preventDefault()

        history.push(`?q=${ hero }`)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>
                    <hr/>

                    <form onSubmit={ handleSearch }>
                        <input 
                            className="form-control"
                            placeholder="Find  your hero"    
                            name="hero"
                            type="text"
                            onChange={ handleInputOnChange }
                            value={ hero }
                        />

                        <button
                            className="btn m-1 btn-block btn-outline-primary"
                            type="submit"
                        >Search...</button>
                    </form>
                </div>
                <div className="col-7">

                    <h4> Results </h4>
                    <hr/>

                    {
                        (q === '') &&
                        <div className="alert alert-info">
                            Search a hero...
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0 ) &&
                        <div className="alert alert-danger">
                            There is not a hero with { q }
                        </div>
                    } 

                    {
                        heroesFiltered.map(hero => {
                           return <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        })
                    }

                </div>
            </div>
        </div>
    )
}
