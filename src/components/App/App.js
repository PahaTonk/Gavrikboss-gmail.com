import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Aside from '../Aside';
import Dialogs from '../Dialogs';
import Header from '../Header';
import Profile from '../Profile';
import styles from './app.module.scss';

/**
 * @description entry point in app
 */
const App = () => {
	return (
		<BrowserRouter>
			<div className={styles.app}>
				<Header />
				<Aside />
				<main className={styles.app__content}>
					<Route path='/profile' render={() => <Profile />} />
					<Route path='/dialogs' render={() => <Dialogs />} />
					<Route path='/news' />
					<Route path='/musik' />
					<Route path='/settings' />
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;
