import React, { Fragment } from 'react';
import FormText from '../../FormText';
import styles from './../profile.module.scss';
import Posts from './Post';

/**
 * @description profile component, creates and shows user posts
 * @param {Array} currentPostText current text for textarea
 * @param {Array} postsData saved posts list
 * @param {Function} addPost callback, adding new post
 * @param {Function} updateNewPostText callback, saving new text in the textarea
 */
const PersonPosts = props => {
	const { currentPostText, postsData } = props;
	const { addPost, updateNewPostText } = props;
	const postCreateRef = React.createRef();

	/**
	 * @description send new post to state
	 */
	const onSubmit = event => {
		event.preventDefault();
		addPost();
		updateNewPostText('');
	};

	/**
	 * @description send text new post to state
	 */
	const onChange = () => {
		const text = postCreateRef.current.value;
		updateNewPostText(text);
	};

	const posts = postsData.map(({ id, ...postData }) => (
		<li key={id} className={`${styles.posts__item} list__item`}>
			<Posts {...postData} />
		</li>
	));

	return (
		<Fragment>
			<div className={styles.posts__top}>
				<FormText
					textareaRef={postCreateRef}
					onSubmit={onSubmit}
					onChange={onChange}
					placeholder={'Write posts...'}
					value={currentPostText}
				/>
			</div>
			<div className='posts__bottom'>
				<ul className={`${styles.posts__list} list`}>{posts}</ul>
			</div>
		</Fragment>
	);
};

export default PersonPosts;
