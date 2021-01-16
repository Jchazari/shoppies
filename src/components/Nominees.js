import React from 'react'
import styled, { css } from 'styled-components';
import Grid from './Grid';
import MovieCard from './MovieCard';
import { Button } from './Button';
import { ReactComponent as CloseIcon } from '../assets/close.svg';

const MoviesContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  overscroll-behavior-x: contain;
`;

const StyledNominees = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  width: 1020px;
  height: 425px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 10px 10px 0 0;
  background-color: #15161b;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  visibility: hidden;
  transform: translateY(450px);
  transition: transform 0.2s;
  ${props => (props.visible && (
    css`
      visibility: visible;
      transform: translateY(0);
    `
  ))}

  @media (max-width: 1036px) {
    width: 100%;

    ${MoviesContainer} {
      position: absolute;
      left: 0;
    }

    ${Grid} {
      grid-template-columns: repeat(6, 180px);
      overflow: auto;
      scroll-behavior: smooth;
      padding-left: 24px;

      &::after {
        content: "";
        box-sizing: border-box;
        width: 8px;
      }
    }
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  padding: 10px;
  background-color: #20222b;
  transition: background-color 0.2s;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #262935;
  }
`;

const Icon = styled(CloseIcon)`
  width: 100%;
  height: auto;
  fill: #cad8ff;
`;

function Nominees({ nominatedMovies, unNominateMovie, nomineesVisible, setNomineesVisible }) {
  return (
    <StyledNominees visible={nomineesVisible}>
      <CloseButton onClick={() => setNomineesVisible(false)}>
        <Icon />
      </CloseButton>
      <Title>Your Nominations</Title>
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
    </StyledNominees>
  );
}

export default Nominees;