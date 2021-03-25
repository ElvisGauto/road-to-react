import React from 'react'

export const GifGrid = ({ category }) => {

    const getGifs = async() => {
        const url ='https://api.giphy.com/v1/gifs/search?api_key=1cmS1QfHJt68PHOIzOELRC98jJUl2iVl&limit=5&q=Rick and Morty'
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        });

        console.log(gifs);
    } 

    getGifs();

    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}
