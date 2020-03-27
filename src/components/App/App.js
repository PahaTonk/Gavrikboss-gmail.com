import React, { Fragment } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './app.scss';

import Header from '../Header';
import Sidebar from '../Aside';
import Profile from '../Profile';
import Dialogs from '../Dialogs';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Sidebar />
        <main className="app__content profile">
          <Route path="/profile" component={Profile}/>
          <Route path="/dialogs" component={Dialogs}/>
        </main>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
