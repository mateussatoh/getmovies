import React from 'react';

const IMAGES_API = 'https://image.tmdb.org/t/p/w500/'


const Movie = ({ title, poster_path, overview, vote_average}) => (
    <div className="movie">
        <img src={IMAGES_API + poster_path} alt={title}/>
        <div className="movie-info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
        </div>

        <div className="overview">
            <h2>Sobre:</h2>
            <p>{overview}</p>
        </div>
    </div>
)

export default Movie