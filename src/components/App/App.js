import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Aside from '../Aside';
import Dialogs from '../Dialogs';
import Header from '../Header';
import Profile from '../Profile';
import styles from './app.module.scss';
import FindUsers from '../FindUsers';

/**
 * @description add server configurations
 */
const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql',
});

/**
 * @description entry point in app
 */
const App = () => {
    return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<div className={styles.app}>
					<Header />
					<Aside />
					<main className={styles.app__content}>
						<Route path='/profile' render={() => <Profile />} />
						<Route path='/dialogs' render={() => <Dialogs />} />
						<Route path='/news' />
						<Route path='/musik' />
						<Route path='/find-users' render={() => <FindUsers />} />
						<Route path='/settings' />
					</main>
				</div>
			</BrowserRouter>
		</ApolloProvider>
    );
};

export default App;
