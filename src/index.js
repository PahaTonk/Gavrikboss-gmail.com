import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.scss';
import store from './redux/reduxStore';
import * as serviceWorker from './serviceWorker';

const renderEntireTree = () => {
	ReactDOM.render(
		<React.StrictMode>
			<App store={store} />
		</React.StrictMode>,
		document.getElementById('root')
	);
};

renderEntireTree();
store.subscribe(() => renderEntireTree());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
