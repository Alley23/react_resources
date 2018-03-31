import React, { Component } from 'react';
import styles from "./index.scss";


class Header extends Component{
    render() {
        return(
            <div className={styles.mainTop}>
                <div className={styles.logo}></div>
            </div>
        )
    }
}

export default Header;