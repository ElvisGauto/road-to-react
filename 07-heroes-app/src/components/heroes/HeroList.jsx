import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../selectors/getHeroByPublisher';
import { HeroCard } from './HeroCard';


export const HeroList = ({ publisher }) => {

    // const heroes = getHeroesByPublisher( publisher );

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);

    return (
        <div className="card-columns animate_animated animate__fadeIn">
            {
                heroes.map( hero => {
                    return (
                        <HeroCard
                            key={ hero.id }
                            { ...hero }
                        />
                    )
                })
            }
        </div>
    )
}
