import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { server } from './_tosslib/server/browser';
import { BrowserRouter as Router } from 'react-router-dom';

server.start({ onUnhandledRequest: 'bypass' });

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
