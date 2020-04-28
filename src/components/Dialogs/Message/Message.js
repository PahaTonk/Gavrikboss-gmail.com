import React, { Fragment } from 'react';
import styles from './../dialogs.module.scss';
import { NavLink } from 'react-router-dom';
import Avatar from '../../small-components/Avatar/Avatar';

/**
 * @description dialog page
 * @param {Object} messageInfo user message information
 */
const Message = ({ left, idUser, messageInfo: { text }, avatar }) => {
	return (
		<Fragment>
			<div className={`${styles.messages__item} list__item`}>
				{text}
				<NavLink
					to={`/profile/${idUser}`}
					className={`${
						left && styles.messages__avatar_left
					} list__item`}
				>
					<Avatar
						avatar={avatar}
						name={'Message'}
						classes={styles.messages__avatar}
					/>
				</NavLink>
			</div>
		</Fragment>
	);
};

export default Message;
