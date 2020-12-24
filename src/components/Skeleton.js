import React from 'react'
import styled from 'styled-components';
import Col from './Col';

const StyledSkeleton = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 5px;
  background: linear-gradient(-90deg, #f1f1f1 0%, #e4e4e4 50%, #f1f1f1 100%);
  background-size: 300% 300%;
  animation: pulse 1.2s ease-in-out infinite;

  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

function Skeleton() {
  return (
    <Col>
      <StyledSkeleton />
    </Col>
  );
}

export default Skeleton;