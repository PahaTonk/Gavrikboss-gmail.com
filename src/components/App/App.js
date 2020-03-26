import React, { Fragment } from 'react';
import './app.scss';

import Header from '../Header';
import Sidebar from '../Aside';
import Profile from '../pages/Profile';

function App() {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <main className="app__content profile">
        <Profile />
      </main>
    </Fragment>
  );
}

export default App;
