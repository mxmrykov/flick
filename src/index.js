import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './ui/css/index.css'
import './ui/css/elements.css'
import './ui/css/blocks.css'
import './ui/css/animations.css'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>
);
reportWebVitals();
