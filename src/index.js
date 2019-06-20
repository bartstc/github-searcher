import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));