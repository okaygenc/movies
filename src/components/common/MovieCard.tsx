import React from 'react';
import { Watchable } from '../../models';

interface Props {
    movie: Watchable
}

const MovieCard: React.FC<Props> = ({ movie }) => {
    return (
        <div className='col-lg-2 col-md-3 col-sm-4 p-2'>
            <img src={movie.images['Poster Art'].url} width="100%" alt={movie.title} />
            <h6 className="mt-2">{movie.title}</h6>
        </div>
    );
};

export default MovieCard;