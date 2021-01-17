import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from './Container';
import bg from '../assets/bg.svg';
import { CTAButton } from './Button';
import { ReactComponent as Browser } from '../assets/browser.svg';

const VisualBrowser = styled(Browser)`
  max-width: 500px;
  width: 100%;

  .card {
    animation-duration: 2s;
    animation-name: animateCard;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes animateCard {
    from { transform: translateX(0) translateY(0); }
    to { transform: translateX(20px) translateY(-20px); }
  }

  @media (max-width: 480px) { max-width: 325px; }
`;

const BackgroundArt = styled.div`
  position: absolute;
  top: 10px;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
  z-index: -1;
  pointer-events: none;
`;

const Content = styled.div`
  padding-bottom: 48px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 55% auto;
  place-items: center;
`;

const WelcomeSection = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: calc(100vh - 75.75px);

  @media (max-width: 950px) {
    ${ContentGrid} {
      grid-template-columns: 1fr;
    }

    ${Content} {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding-bottom: 0;
    }
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: #ffff00;
`;

function Welcome({ inputRef }) {
  return (
    <WelcomeSection>
      <Container>
        <ContentGrid>
          <Content>
            <Title>Welcome!</Title>
            <p>
              Here you will pick your top 5 favorite films that you
              feel should be up for nomination and be at the upcoming Shoppies!
              Search thousands of movies, and pick the ones you love!
            </p>
            <CTAButton
              size="lg"
              mt="32px"
              onClick={() => inputRef.current.focus()}
            >
              Start searching
            </CTAButton>
          </Content>
          <VisualBrowser />
        </ContentGrid>
      </Container>
      <BackgroundArt />
    </WelcomeSection>
  );
}

Welcome.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
};

export default Welcome;