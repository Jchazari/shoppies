import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useOutsideClick from '../hooks/useOutsideClick';
import Banner from './Banner';
import MovieCard from './MovieCard';
import CloseButton from './CloseButton';
import { Button } from './Button';

const WindowOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(14, 14, 16, 0.5);
  opacity: ${props => (props.transitionIn ? '1' : '0')};
  transition: opacity 0.2s;
  z-index: 1000;
`;

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

const NomineesBox = styled.div`
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
  transform: ${props => (props.transitionIn ? 'translateY(0)' : 'translateY(100vh)')};
  transition: transform 0.2s;

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

function Nominees({ nominatedMovies, unNominateMovie, setIsToggled, isFinished }) {
  const ref = useRef();
  const [transitionIn, setTransitionIn] = useState(false);

  useOutsideClick(ref, handleClick);

  useEffect(() => {
    setTransitionIn(true);
  }, []);

  function handleClick() {
    setTransitionIn(false);

    const handler = setTimeout(() => setIsToggled(false), 150);

    return () => clearTimeout(handler);
  }

  return (
    <WindowOverlay transitionIn={transitionIn}>
      <NomineesBox ref={ref} isFinished={isFinished} transitionIn={transitionIn}>
        <CloseButton onClick={() => handleClick()} />
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
      </NomineesBox>
    </WindowOverlay>
  );
}

Nominees.propTypes = {
  nominatedMovies: PropTypes.array.isRequired,
  unNominateMovie: PropTypes.func.isRequired,
  setIsToggled: PropTypes.func.isRequired,
  isFinished: PropTypes.bool.isRequired,
}

export default Nominees;