import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from './contexts/GlobalContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
