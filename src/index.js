import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import OuterLayer from './OuterLayer';

const root = ReactDOM.createRoot(document.getElementById('formdiv'));
root.render(
  <React.StrictMode>
    <OuterLayer />
  </React.StrictMode>
);

reportWebVitals();
