// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Routes from './routes';

import './index.css';
import '../node_modules/semantic-ui/dist/semantic.min.css';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);