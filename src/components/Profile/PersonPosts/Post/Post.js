import React, { Fragment } from 'react';
import styles from './../../profile.module.scss';
import Avatar from '../../../small-components/Avatar/Avatar';

const Posts = props => {
	const { text, likes, avatar, name } = props;
	return (
		<Fragment>
		<Avatar
			avatar={avatar}
			name={name}
			classes={styles.posts__ava}
		/>
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
