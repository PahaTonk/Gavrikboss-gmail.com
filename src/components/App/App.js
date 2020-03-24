import React, { Fragment } from 'react';

import './App.scss';

function App() {
  return (
    <Fragment>
      <header className="app__header header">
        <div className="app__logo header__left-column">
          <img className="image" src="https://static.ucraft.net/fs/userFiles/version2-ru/images/7342-download-svg.gif" />
        </div>
      </header>
      <sidebar className="app__navigation navigation">
          <nav>
            <ul className="navigation__list list">
              <li className="navigation__item list__item-wrapper">
                <a className="navigation__link list__item" href="">Profile</a>
              </li>
              <li className="navigation__item list__item-wrapper">
                <a className="navigation__link list__item" href="">Messages</a>
              </li>
              <li className="navigation__item list__item-wrapper">
                <a className="navigation__link list__item" href="">News</a>
              </li>
              <li className="navigation__item list__item-wrapper">
                <a className="navigation__link list__item" href="">Music</a>
              </li>
              <li className="navigation__item list__item-wrapper">
                <a className="navigation__link list__item" href="">Settings</a>
              </li>
            </ul>
          </nav>
      </sidebar>
      <main className="app__content content">
        <section className="content__info person-info" >
          <div className="person-info__background">
            <img className="image" src="https://kaifolog.ru/uploads/posts/2016-11/1480227668_00_1.jpg" />
          </div>
          <div className="person-info__view">
            
          </div>
        </section>
        <section className="content__posts person-posts">
          <header className="person-posts__create"></header>
          <main className="person-posts__list-wrapper">
            <ul className="person-posts__list list">
              <li className="person-posts__item-wrapper list__item-wrapper">
                <article className="person-posts__item list__item"></article>
              </li>
              <li className="person-posts__item-wrapper list__item-wrapper">
                <article className="person-posts__item list__item"></article>
              </li>
            </ul>
          </main>
        </section>
      </main>
    </Fragment>
  );
}

export default App;
