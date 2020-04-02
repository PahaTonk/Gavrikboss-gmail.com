import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AsideContainer from '../Aside/AsideContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import Header from '../Header';
import Profile from '../Profile';
import styles from './app.module.scss';

/**
 * @description entry point in app
 */
const App = ({ store }) => {
	return (
		<BrowserRouter>
			<div className={styles.app}>
				<Header />
				<AsideContainer store={store} />
				<main className={styles.app__content}>
					<Route
						path='/profile'
						render={() => <Profile store={store} />}
					/>
					<Route
						path='/dialogs'
						render={() => <DialogsContainer store={store} />}
					/>
					<Route path='/news' />
					<Route path='/musik' />
					<Route path='/settings' />
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;
