import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './aside.module.scss';
import appStyles from './../App/app.module.scss';
import Friend from './Friend';

/**
 * @description navigation panel(left column)
 * @param {Array} currentPostText list of friends
 */
const Aside = props => {
	const { friendsInfo } = props;

	const friends = friendsInfo.map(({ id, ...rest }) => (
		<li key={id}>
			<Friend id={id} {...rest} />
		</li>
	));

	return (
		<aside className={`${appStyles.app__aside} ${styles.aside}`}>
			<article className='aside__top navigation'>
				<nav>
					<ul className='list navigation__list'>
						<li className={styles.navigation__item}>
							<NavLink
								className={`list__item ${styles.navigation__link}`}
								activeClassName='list__item_active'
								to='/profile'
							>
								Profile
							</NavLink>
						</li>
						<li className={styles.navigation__item}>
							<NavLink
								className={`list__item ${styles.navigation__link}`}
								activeClassName='list__item_active'
								to='/dialogs'
							>
								Dialogs
							</NavLink>
						</li>
						<li className={styles.navigation__item}>
							<NavLink
								className={`list__item ${styles.navigation__link}`}
								activeClassName='list__item_active'
								exact
								to='/news'
							>
								News
							</NavLink>
						</li>
						<li className={styles.navigation__item}>
							<NavLink
								className={`list__item ${styles.navigation__link}`}
								activeClassName='list__item_active'
								exact
								to='/musik'
							>
								Music
							</NavLink>
						</li>
						<li className={styles.navigation__item}>
							<NavLink
								className={`list__item ${styles.navigation__link}`}
								activeClassName='list__item_active'
								exact
								to='/settings'
							>
								Settings
							</NavLink>
						</li>
					</ul>
				</nav>
			</article>
			<article className={`${styles.aside__bottom} friends`}>
				<ul className={`${styles.friends__list} list`}>{friends}</ul>
			</article>
		</aside>
	);
};

export default Aside;
