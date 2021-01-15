import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from './Grid';
import MovieCard from './MovieCard';
import Button from './Button';

const Wrapper = styled.div``;

function MovieResults({ movies, nominateMovie, isNominated }) {
  return (
    <Grid className="movie-search-results">
      {movies.map(movie => (
        <Wrapper key={movie.imdbID}>
          <MovieCard movie={movie} mb="5px" />
          <Button
            onClick={() => nominateMovie(movie)}
            disabled={isNominated(movie)}
            full
          >
            Nominate
          </Button>
        </Wrapper>
      ))}
    </Grid>
  );
}

MovieResults.propTypes = {
  movies: PropTypes.array.isRequired,
  nominateMovie: PropTypes.func.isRequired,
  isNominated: PropTypes.func.isRequired,
};

export default MovieResults;