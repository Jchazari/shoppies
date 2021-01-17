import React from 'react'
import styled, { css } from 'styled-components';
import Banner from './Banner';
import MovieCard from './MovieCard';
import CloseButton from './CloseButton';
import { Button } from './Button';

const MoviesGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(5, 180px);
  padding: 4px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MoviesContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  overscroll-behavior-x: contain;
`;

const StyledNominees = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 1020px;
  min-height: 417px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 10px 10px 0 0;
  background-color: #15161b;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  visibility: hidden;
  transform: translateY(100vh);
  transition: transform 0.2s, visibility 0.2s;
  
  ${props => (props.isToggled && (
    css`
      visibility: visible;
      transform: translateY(0);
    `
  ))}

  @media (max-width: 1036px) {
    width: 100%;
    min-height: ${props => (props.isFinished && '608px')};

    ${MoviesContainer} {
      position: absolute;
      left: 0;
    }

    ${MoviesGrid} {
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

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 135px;
  color: #2c3044;
  user-select: none;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
`;

function Nominees({ nominatedMovies, unNominateMovie, toggledState, isFinished }) {
  const {isToggled, setIsToggled} = toggledState;

  return (
    <StyledNominees isToggled={isToggled} isFinished={isFinished}>
      <CloseButton onClick={() => setIsToggled(false)} />
      {isFinished && <Banner />}
      <Title>Your Nominations</Title>
      {nominatedMovies.length === 0 ? (
        <Placeholder>
          <p>You haven't nominated any movies yet!</p>
        </Placeholder>
      ) : (
        <MoviesContainer>
          <MoviesGrid>
            {nominatedMovies.map(movie => (
              <div key={movie.imdbID}>
                <MovieCard movie={movie} mb="5px" />
                <Button full onClick={() => unNominateMovie(movie)}>
                  Remove
                </Button>
              </div>
            ))}
          </MoviesGrid>
        </MoviesContainer>
      )}
    </StyledNominees>
  );
}

export default Nominees;