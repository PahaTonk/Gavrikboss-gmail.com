import React from 'react';
import styles from './avatar.module.scss';

const Avatar = ({ avatar, name, classes }) => {
	return (
		<div className={`${styles.avatar} ${classes}`}>
			<img src={avatar} className='image' alt={name} />
		</div>
	);
};

export default Avatar;
