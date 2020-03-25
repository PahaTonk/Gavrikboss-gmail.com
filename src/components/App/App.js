import React, { Fragment } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar/Sidebar';
import Profile from '../pages/Profile';
import './App.scss';

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
