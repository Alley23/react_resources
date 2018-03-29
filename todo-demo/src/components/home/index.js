import React, { Component } from 'react';
import { Button, Alert  } from 'antd';

import Header from '../header';
import List from '../list';

import styles from './index.less';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.wrap}>
                <Header/>
                
                <div className={styles.content}>
                    <List/>
                </div>
                
            </div>
        )
    }
}

export default Home;