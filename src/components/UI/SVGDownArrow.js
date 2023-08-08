import React from 'react';

const SVGDownArrow = ({ style }) => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fas'
      data-icon='chevron-down'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      style={style}>
      <path
        fill='currentColor'
        d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'></path>
    </svg>
  );
};

export default SVGDownArrow;
