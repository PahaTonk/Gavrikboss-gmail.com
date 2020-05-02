import React from 'react';
import Button from '../Button';
import styles from './pagination.module.scss';

/**
 * @description create default pagination
 * @param {Number} quantity quantity buttons
 * @param {Number} activeNumber active button
 */
const Pagination = ({ quantity, activeNumber, clickCB, ref }) => {
    const buttons = [];

    for (let i = 1; i <= quantity; i++) {
        const _classes = `${styles.pagination__button} ${activeNumber === i ? styles.pagination__button_active : ''}`;
        const button = <Button classes={_classes} key={`pag-${i}`} text={i} clickCB={() => clickCB(i)} ref={ref} />;

        buttons.push(button);
    }

    return <article>{buttons}</article>;
};

export default Pagination;
