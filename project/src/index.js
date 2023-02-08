import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Welcome from './welcomeapp/welcome';
import Main from './main/main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>
);

reportWebVitals();
