import React from 'react';
import {NavLink} from "react-router-dom";
import { FaHome } from "react-icons/fa";

import styles from './Header.module.scss';

const Header = (props) => {
    return (
        <header className={styles.Header}>
            <ul>
                <li><NavLink to="/"><FaHome/>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </header>
    );
};


export default Header;