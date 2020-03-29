import React, { Fragment } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import styles from './app.module.scss';

import Header from '../Header';
import Sidebar from '../Aside';
import Profile from '../Profile';
import Dialogs from '../Dialogs';

const App = ({usersInfo, messagesInfo, postsData}) => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Sidebar />
        <main className={styles.app__content}>
          <Route path="/profile" render={() => <Profile postsData={postsData}/>} />
          <Route path="/dialogs" render={() => <Dialogs usersInfo={usersInfo} messagesInfo={messagesInfo}/>} />
          <Route path="/news" />
          <Route path="/musik"/>
          <Route path="/settings" />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
