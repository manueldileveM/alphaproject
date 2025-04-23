import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // o './App.css' se usi quello per gli stili globali
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
