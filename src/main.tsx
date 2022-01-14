import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from './stores/helpers/createStore';
import { StoreProvider } from './stores/helpers/storeContext';

export const rootStore = createStore();
const rootDiv = document.querySelector('#root');

ReactDOM.render(
  <StoreProvider value={rootStore}>
    <App />
  </StoreProvider>,
  rootDiv
);
