import React from 'react';
import PropTypes from 'prop-types';

function ReminderIcon({ className, fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 60 60" version="1.1">
    <path d="M 52.5 42.5 L 52.5 20 L 17.5 20 L 17.5 42.5 L 52.5 42.5 M 52.5 7.5 C 55.261719 7.5 57.5 9.738281 57.5 12.5 L 57.5 42.5 C 57.5 45.261719 55.261719 47.5 52.5 47.5 L 17.5 47.5 C 14.726562 47.5 12.5 45.25 12.5 42.5 L 12.5 12.5 C 12.5 9.738281 14.738281 7.5 17.5 7.5 L 20 7.5 L 20 2.5 L 25 2.5 L 25 7.5 L 45 7.5 L 45 2.5 L 50 2.5 L 50 7.5 L 52.5 7.5 M 7.5 52.5 L 42.5 52.5 L 42.5 57.5 L 7.5 57.5 C 4.726562 57.5 2.5 55.25 2.5 52.5 L 2.5 22.5 L 7.5 22.5 L 7.5 52.5 M 47.5 37.5 L 37.5 37.5 L 37.5 27.5 L 47.5 27.5 Z M 47.5 37.5 "/>
    </svg>
  );
}

ReminderIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

ReminderIcon.defaultProps = {
  className: undefined,
  fill: '#333',
};

export default ReminderIcon;

