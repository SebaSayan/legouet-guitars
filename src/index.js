import App from './App';
import React from 'react';
import './style/index.scss';
import Modal from 'react-modal';
import ReactDOM from 'react-dom/client';

Modal.setAppElement('#root')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

