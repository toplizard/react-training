import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {BrowserRouter} from 'react-router-dom'

const root = document.getElementById('app-container');

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    root
);