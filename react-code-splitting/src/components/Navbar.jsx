// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles['nav-div']}>
            <nav>
                <Link to="/home">Home</Link> &nbsp; | &nbsp;
                <Link to="/about">About</Link> &nbsp; | &nbsp;
                <Link to="/profile">Profile</Link> &nbsp; | &nbsp;
                <Link to="/contact">Contact</Link>
            </nav>
            <p className={styles['nav-para']}>open the <strong>Network</strong> panel and check how many JS/ JSX files are loaded and their sequence</p>
        </div>
    )
}

export default Navbar;
