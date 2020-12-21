import React from 'react'
import { ReactComponent as Trophy} from '../../assets/trophy.svg';
import Button from '../Button';
import {
  StyledMovieCard,
  Poster,
  Img,
  Details,
  Title,
  Year
} from './style';

function MovieCard() {
  return (
    <StyledMovieCard>
      <Button full icon={<Trophy />} disabled>Nominate</Button>
      <Poster>
        <Img src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg" />
      </Poster>
      <Details>
        <Title>Joker</Title>
        <Year>2019</Year>
      </Details>
    </StyledMovieCard>
  );
}

export default MovieCard;