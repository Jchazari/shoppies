import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from './Grid';

const SkeletonCard = styled.div`
  width: 100%;
  height: 0;
  padding-top: 150%;
  border-radius: 5px;
  background: linear-gradient(-90deg, #15171b 0%, #191c21 50%, #15171b 100%);
  background-size: 350% 450%;
  animation: pulse 1s ease-in-out infinite;

  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

function Skeleton({ qty }) {
  return (
    <Grid className="movie-search-results">
      {[...Array(qty)].map((s, i) => <SkeletonCard key={i} />)}
    </Grid>
  );
}

Skeleton.propTypes = {
  qty: PropTypes.number,
};

Skeleton.defaultProps = {
  qty: 1,
};

export default Skeleton;