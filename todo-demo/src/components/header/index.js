import React, { Component } from 'react';
import { connect } from "react-redux";
import { addList } from "../../actions/actions.js"; 

import styles from './index.less';

class Header extends Component{
    constructor(props) {
        super(props);
        this.addList = this.addList.bind(this);
        this.addContent = this.addContent.bind(this);
    }

    addList(event) {
        if (event.keyCode == 13) { //绑定回车 
            this.addContent();
        } 
    }

    addContent() {
        this.refs.text.value && this.props.dispatch(addList(this.refs.text.value));
        this.refs.text.value = "";
    }

    render() {
        return(
            <div className={styles.header}>
                <div className={styles.content}>
                    <span className={styles.title}>添加事项：</span>
                    <input ref="text" className={styles.text} type="text" name="" onKeyDown={this.addList}/>
                    <span className={styles.btn} onClick={this.addContent}>确 定</span>
                </div>
            </div>
        )
    }
    
}

export default connect(
    null
)(Header);