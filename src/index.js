import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/Mandatory.Plaything.otf';
import './assets/fonts/Montserrat-VariableFont_wght.ttf';
import { ethers } from 'ethers';
import { Web3ReactProvider } from '@web3-react/core';


const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  return library;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
