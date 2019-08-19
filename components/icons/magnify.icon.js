import React from 'react';
import PropTypes from 'prop-types';

function MagnifyIcon({ className, fill }) {
  return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27C12.59 15.41 11.11 16 9.5 16A6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/></svg>  
    );
}

MagnifyIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

MagnifyIcon.defaultProps = {
  className: undefined,
  fill: '#333',
};

export default MagnifyIcon;

