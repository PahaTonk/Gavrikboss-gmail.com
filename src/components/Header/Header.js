import React from 'react';
import styles from './header.module.scss';

/**
 * @description header (top row)
 */
const Header = () => {
    return (
        <header className={`app__header ${styles.header}`}>
          <div className={styles.header__leftColumn}>
            <img className="image" src="https://www.stickpng.com/assets/images/58406746657b0e0e08612e45.png" alt="bg" />
          </div>
        </header> 
    );
};

export default Header;