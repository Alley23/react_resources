import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from "./index.scss";

class headerUser extends Component {
    constructor() {
        super()
        this.state = {
            isShow: false,  //是否显示下拉列表
            navColor: ['#9aceff', '#eeaaff', '#97e29d', '#f0bc80', '#90e7e3']
        }
        this.showDropDownMenu = this.showDropDownMenu.bind(this)
        this.closeDropDownMenu = this.closeDropDownMenu.bind(this)
    }

    showDropDownMenu() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    closeDropDownMenu() {
        this.setState({
            isShow: false
        })
    }


    render() {
        return (
            <div className={styles.headerUser}>
                <div className={styles.toggleBtn}>
                    <div className={styles.userImg}></div>
                    <div className={styles.userInfo}>
                       <p>管理员</p>
                       <p>001-部门</p>
                    </div>
                    <i></i>
                </div>
            </div>
        )
    }
}

export default headerUser;