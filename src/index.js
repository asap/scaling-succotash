import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import todoStoreMiddleware from './middleware/todoStoreMiddleware';
import App from './components/App';
import rootReducer from './reducers';

import './styles/index.scss';

// For debugging REDUX
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(todoStoreMiddleware)),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
