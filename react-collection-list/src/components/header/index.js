import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from "./index.scss";


class Header extends Component{
    constructor() {
        super()
        this.state = {
            isShow: false,  //是否显示下拉列表
            navData: 
            [
                {
                    id: 1,
                    icon: "1",
                    name: "APP-01",
                    url: '/'
                },
                {
                    id: 2,
                    icon: "1",
                    name: "APP-02",
                    url: '/'
                },
                {
                    id: 3,
                    icon: "1",
                    name: "APP-03",
                    url: '/'
                },
                {
                    id: 4,
                    icon: "1",
                    name: "APP-04",
                    url: '/'
                },
                {
                    id: 5,
                    icon: "1",
                    name: "APP-05",
                    url: '/'
                }
            ],
            navColor:['#9aceff', '#eeaaff', '#97e29d', '#f0bc80','#90e7e3']
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
        return(
            <div className={styles.mainTop}>
                <div className={styles.logo}></div>
                <div className={styles.headerApp}>
                    <div className={styles.navToggleBtn} onClick={this.showDropDownMenu}>
                        应用列表
                    </div>
                    <div 
                        className={this.state.isShow ? styles.dropDownMenu + ' ' + styles.showDropDownMenu : styles.dropDownMenu} 
                    style={{ display: this.state.isShow ? "block" : "none" }} 
                    onMouseLeave={this.closeDropDownMenu}
                    >
                        <div className={styles.dropDownMenuHeader}>
                            <span>应用中心</span>
                            <Link className={styles.indexLink} to={"/"}>工作台首页</Link>
                        </div>
                        <div className={styles.dropDownMenuList}>
                            <ul>
                                {
                                    this.state.navData && this.state.navData.map((item, index) => {
                                        return <li className={styles.item} key={item.id}>
                                            <i style={{ backgroundColor: this.state.navColor[index]}}></i>
                                            <Link className={styles.itemLink} to={item.url}>{item.name}</Link>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;