import React from 'react';
import ReactDOM from 'react-dom';
import { Services } from './components/TableServices/Services';
import './index.css';
import { AppRouter } from './AppRouter';
import { RouterService } from './components/TableRouter/RouterService';
ReactDOM.render(
  <React.StrictMode>
    <RouterService />
  </React.StrictMode>,
  document.getElementById('root')
);


