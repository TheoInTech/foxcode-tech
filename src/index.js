import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/base/_base.scss';
import './assets/scss/base/_font.scss';
import './assets/scss/base/_typography.scss';
import Home from './screens/Home';
import * as serviceWorker from './serviceWorker';

/**
|--------------------------------------------------
| Main app initialization
| Preparing Redux for App with Providers
| Rendering App inside wrapper element
|--------------------------------------------------
*/
render(
    <BrowserRouter>
        <Home />
    </BrowserRouter>,
    document.getElementById('wrapper')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
