import './assets/style.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(
  <App year="2019" title="app" />,
  document.querySelector('#app'),
);
