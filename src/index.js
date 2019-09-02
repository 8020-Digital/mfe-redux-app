import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderBrowse = (containerId, history) => {
    ReactDOM.render(<App history={history} />, document.getElementById(containerId));
    serviceWorker.unregister()
};

window.unmountBrowse = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
