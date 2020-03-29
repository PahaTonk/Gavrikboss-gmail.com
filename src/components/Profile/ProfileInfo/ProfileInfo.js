import React, { Fragment } from 'react';
import styles from './../profile.module.scss';

const ProfileInfo = () => {
    return (
        <Fragment>
            <div className={styles.person__background}></div>
            <article className={styles.person__view}>
                <div className={styles.person__ava}>
                    <img className="image" src="https://telegraf.com.ua/files/2019/01/milye-i-ocharovatelnye-shhekastye-pyosiki-5.jpg" alt="Avatar" />
                </div>
                <div className={styles.person__info}>
                    <h1 className="person__name">Dog Jack</h1>
                    <p className="person__age">3 old year</p>
                    <p className="person__status">Wow...</p>
                </div>
            </article>
        </Fragment>
    );
};

export default ProfileInfo;