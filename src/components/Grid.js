import PropTypes from 'prop-types';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;

  &.welcome-content {
    grid-gap: 3rem;
    grid-template-columns: 55% auto;
    place-items: center;

    @media (max-width: 950px) {
      grid-template-columns: 1fr;
    }
  }

  &.movie-search-results {
    width: 100%;
    grid-gap: 1rem;
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
  }

  &.nominated-movies {
    grid-gap: 1rem;
    grid-template-columns: repeat(5, 180px);
    padding: 4px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default Grid;