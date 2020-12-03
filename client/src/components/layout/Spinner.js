import React from 'react';

const Spinner = () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '75px' }}
    >
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-red-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
