import React from 'react';

export default function LoadingSpinner() {
  return (
    <>
      <div
        id="loader"
        style={{
          backgroundColor: 'rgb(0,0,0,0.5)',
          position: 'fixed',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          color: 'white',
          fontSize: 'calc(4vw + 10px)',
        }}
      >
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
        Loading ...
      </div>
    </>
  );
}
