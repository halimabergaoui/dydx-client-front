// src/pages/DydxConnectPage.tsx
import React from 'react';
import connectToDydx from '../dydx/connectToDydx';

const DydxConnectPage: React.FC = () => {
  return (
    <div>
      <h1>Connect to dYdX</h1>
      <button onClick={() => connectToDydx().then(account => {
          if (account) {
            console.log('Connected account:', account);
            // Perform additional actions after successful connection
          }
        })} 
        className="Button">
        Connect
      </button>
    </div>
  );
};

export default DydxConnectPage;
