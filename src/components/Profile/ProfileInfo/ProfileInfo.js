import React, { Fragment } from 'react';
import styles from './../profile.module.scss';
import Avatar from '../../small-components/Avatar/Avatar';
import { connect } from 'react-redux';

const ProfileInfo = props => {
    const { avatar, name, age, status } = props;

    return (
        <Fragment>
            <div className={styles.person__background}></div>
            <article className={styles.person__view}>
                <Avatar avatar={avatar} name={name} classes={styles.person__ava} />

                <div className={styles.person__info}>
                    <h1 className='person__name'>{name}</h1>
                    <p className='person__age'>{age} old year</p>
                    <p className='person__status'>{status}</p>
                </div>
            </article>
        </Fragment>
    );
};

const mapStateToProps = state => {
    const {
        profileState: { avatar, name, age, status },
    } = state;

    return {
        avatar,
        name,
        age,
        status,
    };
};

export default connect(mapStateToProps)(ProfileInfo);
