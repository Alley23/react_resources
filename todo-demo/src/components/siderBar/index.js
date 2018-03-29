import React, { Component } from 'react';
import styles from './index.less';

class SiderBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
    }

    filterList(num) {
        this.setState({
            num: num
        })
        this.props.filterList(num);
    }

    doneItem() {
        let sum = 0;
        this.props.getItemData && this.props.getItemData.map((item, index) => {
            if(item.done){
                sum ++;
            }
        })
        return sum;
    }
   

    render() {
        return(
            <div>
                <ul className={styles.siderBar}>
                    <li>
                        <span>全部</span>
                        <span>{this.props.getItemData.length}</span>
                    </li>
                    <li>
                        <span>已做</span>
                        <span>{this.doneItem()}</span>
                    </li>
                    <li>
                        <span>未做</span>
                        <span>{this.props.getItemData.length - this.doneItem()}</span>
                    </li>
                </ul>
                <ul className={styles.nav}>
                    <li className={this.state.num == 1 ? styles.active : styles.item} onClick={this.filterList.bind(this, 1)}>
                        显示全部
                        </li>
                    <li className={this.state.num == 2 ? styles.active : styles.item} onClick={this.filterList.bind(this, 2)}>
                        显示已做
                        </li>
                    <li className={this.state.num == 3 ? styles.active : styles.item} onClick={this.filterList.bind(this, 3)}>
                        显示未做
                        </li>
                </ul>
            </div>
        )
    }
    
}

export default SiderBar;