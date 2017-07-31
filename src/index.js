import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

render(<App url="http://localhost:5000/api/v1/books"/>, document.getElementById('root'))