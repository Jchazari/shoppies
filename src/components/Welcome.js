import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as browser } from '../assets/browser.svg';
import bg from '../assets/bg.svg';
import Section from './Section';
import Container from './Container';
import Grid from './Grid';
import { CTAButton } from './Button';

const Content = styled.div`
  @media (max-width: 830px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Illustrations = styled.div`
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

const VisualBrowserSvg = styled(browser)`
  max-width: 500px;
  width: 100%;
  
  @media (max-width: 480px) {
    max-width: 325px;
  }

  .card {
    animation-duration: 2s;
    animation-name: animateCard;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes animateCard {
    from {
      transform: translateX(0) translateY(0);
    }
    to {
      transform: translateX(20px) translateY(-20px);
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
    <Section className="welcome-section">
      <Container>
        <Grid className="welcome-content">
          <Content>
            <Title>Welcome!</Title>
            <p>
              The Shoppies gives you the power to choose the movies
              that you feel should be up for nomination! Search thousands
              of movies, and nominate the ones you love!
            </p>
            <CTAButton
              size="lg"
              mt="32px"
              onClick={() => inputRef.current.focus()}
            >
              Start searching
            </CTAButton>
          </Content>
          <VisualBrowserSvg />
        </Grid>
      </Container>
      <Illustrations />
    </Section>
  );
}

Welcome.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
};

export default Welcome;