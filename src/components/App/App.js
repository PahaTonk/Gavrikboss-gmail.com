import React, { Fragment } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './app.scss';

import Header from '../Header';
import Sidebar from '../Aside';
import Profile from '../Profile';
import Dialogs from '../Dialogs';

const App = ({usersInfo, messagesInfo, postsData}) => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Sidebar />
        <main className="app__content profile dialogs">
          <Route path="/profile" render={() => <Profile postsData={postsData}/>} />
          <Route path="/dialogs" render={() => <Dialogs usersInfo={usersInfo} messagesInfo={messagesInfo}/>} />
          <Route path="/news" />
          <Route path="/musik"/>
          <Route path="/settings" />
        </main>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
