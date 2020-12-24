import React from 'react'
import styled, { css } from 'styled-components';
import poster from '../assets/joker-poster.jpeg';

const StyledMovieCard = styled.div`
  position: relative;
  width: ${props => props.nominated ? '180px' : '100%'};
  height: 270px;
  border-radius: 5px;
  background-color: #1c1d21;
  overflow: hidden;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,.12);
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Details = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 8px;
  background-color: rgba(32, 35, 43, 0.9);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const MovieTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MovieYear = styled.p`
  font-size: 0.813rem;
  color: #888888;
`;

function MovieCard({ movie }) {
  const {Title, Year, Poster} = movie;

  return (
    <StyledMovieCard>
      <ImgWrapper>
        <Img src={Poster} alt={Title}/>
      </ImgWrapper>
      <Details>
        <MovieTitle title={Title}>{Title}</MovieTitle>
        <MovieYear>{Year}</MovieYear>
      </Details>
    </StyledMovieCard>
  );
}

MovieCard.defaultProps = {
  movie: {
    "Title": "Joker",
    "Year": "2019",
    "Poster": poster,
  },
};

export default MovieCard;