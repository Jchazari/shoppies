import styled, { css } from 'styled-components';

const FixedGridStyles = css`
  grid-template-columns: repeat(100, 180px);
  padding: 0 16px;
  padding-bottom: 12px;
  overflow: auto;
  scroll-behavior: smooth;

  &:after {
    content: '';
    box-sizing: border-box;
    width: 1px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ResponsiveGridStyles = css`
  width: 100%;
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

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  ${props => props.fixed ? FixedGridStyles : ResponsiveGridStyles};
`;

export default Grid;