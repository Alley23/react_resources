import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from "./index.scss";

import AppList from './components/appList/index.jsx';
import UserInfo from './components/user/index.jsx';


class Header extends Component{
    constructor() {
        super()
    }

    render() {
        return(
            <div className={styles.mainTop}>
                <div className={styles.logo}></div>
                <AppList/>
                <UserInfo/>
            </div>
        )
    }
}

export default Header;