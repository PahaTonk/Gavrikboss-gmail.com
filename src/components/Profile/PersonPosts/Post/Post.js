import React, { Fragment } from 'react';
import styles from './../../profile.module.scss';

const Posts = ({ text, likes, avatar }) => {
	return (
		<Fragment>
			<div className={styles.posts__ava}>
				<img className='image' src={avatar} alt='Avatar' />
			</div>
			<div className={styles.posts__text}>{text}</div>
			<div className={styles.posts__footer}>
				<button className='posts__likes button' type='button'>
					{likes.count} likes
				</button>
			</div>
		</Fragment>
	);
};

export default Posts;
