import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

import store from './redux/store';

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={store.state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderEntireTree();
store.subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA 
serviceWorker.unregister();
