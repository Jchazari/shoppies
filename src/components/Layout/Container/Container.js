import React from 'react'
import { ContentContainer } from './style';

function Container({ children }) {
  return (
    <ContentContainer>
      {children}
    </ContentContainer>
  );
}

export default Container;