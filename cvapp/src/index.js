import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouteSwitch } from './RouteSwitch';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="bg-[url(./img/bg.jpg)] bg-cover bg-fixed">
    <React.StrictMode>
      <RouteSwitch />
    </React.StrictMode>
  </div>
);

reportWebVitals();
