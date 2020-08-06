import React from 'react';
import {hydrate} from 'react-dom';
import App from './App';


const renderApp = Component => {
    const rootElement = document.getElementById('root');
    hydrate(<Component />, rootElement)
};

renderApp(App);