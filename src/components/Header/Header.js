import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={`app__header ${styles.header}`}>
          <div className={styles['header__left-column']}>
            <img className="image" src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG39.png" alt="bg" />
          </div>
        </header> 
    );
};

export default Header;