import React from 'react';

const IMAGES_API = 'https://image.tmdb.org/t/p/w500/'


const Movie = ({ title, poster_path, overview, vote_average}) => (
    <div className="movie">
        <img src={IMAGES_API + poster_path} alt={title}/>
    </div>
)

export default Movie