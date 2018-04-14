import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from "./index.scss";

class headerUser extends Component {
    constructor() {
        super()
        this.state = {
            isShow: false,  //是否显示下拉列表
            navColor: ['#9aceff', '#eeaaff', '#97e29d', '#f0bc80', '#90e7e3'],
            data:[
                {
                    id: 1,
                    name: "测试-01",
                    department: "第三方就开始地方开始"
                },
                {
                    id: 2,
                    name: "测试-02",
                    department: "第三方就开始地方开始"
                },
                {
                    id: 3,
                    name: "测试-03",
                    department: "第三方就开始地方开始"
                }
            ]
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

    changeAccount(id) {
        console.log('====================================');
        console.log(id);
        console.log('====================================');
    }


    render() {
        return (
            <div className={styles.headerUser}>
                <div className={styles.toggleBtn} onClick={this.showDropDownMenu}>
                    <div className={styles.userImg}></div>
                    <div className={styles.userInfo}>
                       <p className={styles.name}>管理员</p>
                        <p className={styles.department}>001-部门</p>
                    </div>
                    <i className={styles.userIcon}></i>
                </div>
                <div 
                    className={styles.dropDownMenu} 
                    onMouseLeave={this.closeDropDownMenu}
                    style={{ display: this.state.isShow ? "block" : "none" }}>
                    <ul>
                        {
                            this.state.data && this.state.data.map((item, index) => {
                                return(
                                    <li onClick={this.changeAccount.bind(this, item.id)}>
                                        <i className={styles.accountImg} style={{ backgroundColor: this.state.navColor[index]}}></i>
                                        <div className={styles.accountInfo}>
                                            <p className={styles.name}>{item.name}</p>
                                            <p className={styles.department}>{item.department}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                    <a href="javascript:;" className={styles.accountIofo}>账号信息</a>
                    <a href="javascript:;" className={styles.close}>退出</a>
                </div>
            </div>
        )
    }
}

export default headerUser;