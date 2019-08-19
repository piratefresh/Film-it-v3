import React from 'react';
import PropTypes from 'prop-types';

function CloseIcon({ className, fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill={fill}><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14v14M17 8.4L13.4 12l3.6 3.6-1.4 1.4-3.6-3.6L8.4 17 7 15.6l3.6-3.6L7 8.4 8.4 7l3.6 3.6L15.6 7 17 8.4z"/></svg>  
    );
}

CloseIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

CloseIcon.defaultProps = {
  className: undefined,
  fill: '#333',
};

export default CloseIcon;

