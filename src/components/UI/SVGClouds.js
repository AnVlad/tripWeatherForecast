import React from 'react';

const SVGElement = ({ className, style }) => {
  return (
    <svg
      className={className}
      style={style}
      aria-hidden='true'
      focusable='false'
      data-prefix='fas'
      data-icon='cloud'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 640 512'>
      <path
        fill='currentColor'
        d='M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z'></path>
    </svg>
  );
};

export default SVGElement;
