import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as Icon } from '../assets/trophy.svg';
import Section from './Section';
import Container from './Container';
import Grid from './Grid';
import MovieCard from './MovieCard';
import { Button } from './Button';

const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow-x: hidden;
  overscroll-behavior-x: contain;
  
  @media (max-width: 1200px) {
    position: absolute;
    left: 0;
  }
`;

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 276px;
  color: #373746;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Trophy = styled(Icon)`
  width: 32px;
  fill: #ffff00;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-left: 8px;
`;

function Nominees({ nominatedMovies, unNominateMovie }) {
  return (
    <Section className="nominees-section">
      <Container>
        <TitleWrapper>
          <Trophy />
          <Title>Your Nominations</Title>
        </TitleWrapper>
        {nominatedMovies.length === 0 ? (
          <Placeholder>
            <p>Begin by searching for a movie!</p>
          </Placeholder>
        ) : (
          <MoviesContainer>
            <Grid className="nominated-movies">
              {nominatedMovies.map(movie => (
                <div key={movie.imdbID}>
                  <MovieCard movie={movie} mb="5px" />
                  <Button full onClick={() => unNominateMovie(movie)}>
                    Remove
                  </Button>
                </div>
              ))}
            </Grid>
          </MoviesContainer>
        )}
      </Container>
    </Section>
  );
}

Nominees.propTypes = {
  nominatedMovies: PropTypes.array.isRequired,
  unNominateMovie: PropTypes.func.isRequired,
};

export default Nominees;