import React from 'react'
import styled from 'styled-components/macro';
import { ReactComponent as Trophy } from '../assets/trophy.svg';
import Grid from './Grid';

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 395px;
  padding: 16px calc(((100vw - 1200px) / 2) - 8px);
  background-color: #111215;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
`;

const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-top: 16px;
  overflow-x: hidden;
  overscroll-behavior-x: contain;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #373746;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;

  h2 {
    position: relative;
    font-size: 1.25rem;
    font-weight: 500;
  }

  svg {
    width: 1.75em;
    height: 1.75em;
    margin-right: 8px;
  }
`;

function Nominees({ children }) {
  return (
    <Section>
      <Header>
        <Trophy />
        <h2>Your Nominations</h2>
      </Header>
      {children.length === 0 ? (
        <Placeholder>
          <p>Begin by searching for a movie!</p>
        </Placeholder>
      ) : (
        <MoviesContainer>
          <Grid fixed>
            {children}
          </Grid>
        </MoviesContainer>
      )}
    </Section>
  );
}

export default Nominees;