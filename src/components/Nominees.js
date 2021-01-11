import React from 'react'
import styled from 'styled-components/macro';
import { ReactComponent as Icon } from '../assets/trophy.svg';
import Container from './Container';
import Grid from './Grid';

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 400px;
  padding: 16px 0;
  background-color: #111215;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
`;

const MoviesContainer = styled.div`
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

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Trophy = styled(Icon)`
  width: 32px;
  fill: #fed130;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  margin-left: 8px;
`;

function Nominees({ children }) {
  return (
    <Section>
      <Container>
        <Header>
          <Trophy />
          <Title>Your Nominations</Title>
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
      </Container>
    </Section>
  );
}

export default Nominees;