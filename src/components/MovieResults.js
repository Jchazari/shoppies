import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import { Button } from './Button';

export const MoviesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function MovieResults({ movies, nominateMovie, isNominated }) {
  return (
    <MoviesGrid>
      {movies.map(movie => (
        <div key={movie.imdbID}>
          <MovieCard movie={movie} mb="5px" />
          <Button
            onClick={() => nominateMovie(movie)}
            disabled={isNominated(movie)}
            full
          >
            Nominate
          </Button>
        </div>
      ))}
    </MoviesGrid>
  );
}

MovieResults.propTypes = {
  movies: PropTypes.array.isRequired,
  nominateMovie: PropTypes.func.isRequired,
  isNominated: PropTypes.func.isRequired,
};

export default MovieResults;