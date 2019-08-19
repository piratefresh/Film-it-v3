import React from 'react';
import PropTypes from 'prop-types';

function OverviewIcon({ className, fill }) {
  return (
          <svg xmlns="http://www.w3.org/2000/svg" className={className} width="60px" height="60px" viewBox="0 0 80 80"><path d="M33.332031 16.667969v20H70v-20M53.332031 60H70V40H53.332031m-40 20H30V16.667969H13.332031m20 43.332031H50V40H33.332031zm0 0"/></svg>
      );
}

OverviewIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

OverviewIcon.defaultProps = {
  className: undefined,
  fill: '#333',
};

export default OverviewIcon;

