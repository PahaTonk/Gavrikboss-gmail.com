import React from 'react';

const Aside = () => {
    return (
        <aside className="app__navigation navigation">
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
        </aside>
    );
};

export default Aside;