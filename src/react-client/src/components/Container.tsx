import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="container">
      <div className="row min-vh-100 p-5">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          {children}
        </div>
      </div>
    </div>
  );
};