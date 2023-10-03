import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LinkPages.module.css';

function LinkPages({ url, children }) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default LinkPages;