import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './../aside.module.scss';
import Avatar from '../../small-components/Avatar/Avatar';

const Friend = ({ id, name, avatar }) => {
	return (
		<NavLink
			className={`${styles.friends__item} list__item`}
			activeClassName='list__item_active'
			to={`/profile/${id}`}
		>	
			<Avatar avatar={avatar} name={name} classes={styles.friends__avatar} />
			
			<h3 className={styles.friends__name}>{name}</h3>
		</NavLink>
	);
};

export default Friend;
