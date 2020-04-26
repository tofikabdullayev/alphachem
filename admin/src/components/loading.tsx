import React from 'react';

const Loading: React.FC<{ isDialog?: boolean }> = ({ isDialog }) => {
  return (
    <div className={`loading ${isDialog && 'isDialog'}`}>
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loading;
