import React from 'react';

function heroImage(imgSrc) {
  return (
    <img
      src={imgSrc}
      alt="science experiment"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'fixed',
        zIndex: -1,
        opacity: 1,
        objectPosition: '10% 100%',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        filter: 'brightness(50%)',
      }}
    />
  );
}

export default heroImage;
