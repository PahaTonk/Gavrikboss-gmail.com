import React, { Fragment } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import styles from './app.module.scss';

import Header from '../Header';
import Sidebar from '../Aside';
import Profile from '../Profile';
import Dialogs from '../Dialogs';

/**
 * @description entry point in app
 * @param {Object} profileState current state profile page
 * @param {Object} dialogsState current state dialog page
 * @param {Object} navigationState current state aside panel
 * @param {Function} dispatch callback, check actions
 */
const App = ({appState : {profileState, dialogsState, navigationState}, dispatch}) => {
    return (
        <BrowserRouter>
            <div className={styles.app}>
                <Header />
                <Sidebar {...navigationState}/>
                <main className={styles.app__content}>
                    <Route path="/profile" render={() => <Profile {...profileState} dispatch={dispatch}/>} />
                    <Route path="/dialogs" render={() => <Dialogs {...dialogsState} dispatch={dispatch}/>} />
                    <Route path="/news" />
                    <Route path="/musik"/>
                    <Route path="/settings" />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
