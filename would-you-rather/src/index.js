import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

ReactDOM.render(<App />, document.getElementById('root'));
