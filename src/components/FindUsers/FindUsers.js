import React from 'react';
import { followAC, unfollowAC } from '../../redux/reducers/usersReducer';
import styles from './find-users.module.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Avatar from './../small-components/Avatar';
import Button from '../small-components/Button';

const FindUsers = props => {
	const { users } = props;
	const { follow, unfollow } = props;
	const followingManagement = (id, isFriend) => {

		isFriend ? unfollow(id) : follow(id);
	}
	const usersList = users.map(user => (
		<article key={user.id} className={`${styles.user} list__item`}>
			<div className={`${styles.user__column_left} ${styles.user__view}`}>
				<NavLink to={`/users/${user.id}`}>
					<Avatar
						avatar={user.avatar}
						name={user.name}
						classes={styles.user__avatar}
					/>
				</NavLink>
				
				<form onSubmit={event => {
					event.preventDefault();

					followingManagement(user.id, user.friend);
				}}>
					<Button type='submit' text={user.friend ? 'Unfollow' : 'Follow'} classes={styles.user__following}/>
				</form>
			</div>
			<div className={`${styles.user__column_right} ${styles.user__info}`}>
				<h3 className={styles.user__name}>{user.name}</h3>
				<h3 className={styles.user__location}>{`${user.location.country}, ${user.location.city}`}</h3>
				<span className={styles.user__status}>{user.status}</span>
			</div>
		</article>
	));

	return <section className={`${styles.users} list`}>{usersList}</section>;
};

const mapStateToProps = state => {
	const {
		usersState: { users },
	} = state;

	return { users };
};

const mapDispatchToProps = dispatch => ({
	follow: id => {
		const action = followAC(id);

		dispatch(action);
	},
	unfollow: id => {
		const action = unfollowAC(id);

		dispatch(action);
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(FindUsers);
