import styled from 'styled-components';

export const StyledMovieCard = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
  // box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  user-select: none;
  button {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Poster = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% * 1.5);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Details = styled.div`
  padding: 8px;
`;

export const Title = styled.h3`
  font-size: 1rem;
  line-height: 1;
  margin-bottom: 2px;
`;

export const Year = styled.p`
  font-size: 0.875rem;
  line-height: 1;
  color: #888888;
`;