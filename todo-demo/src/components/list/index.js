import React, { Component } from 'react';
import { editChange, remove, endEdit } from '../../actions/actions';
import { connect } from "react-redux";
import styles from './index.less';

import SiderBar from '../siderBar';
import Items from '../items';

class List extends Component{
    constructor(props) {
        super(props);

        this.state = {
            filterNum: 1
        }

        this.editChange = this.editChange.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.endEdit = this.endEdit.bind(this);
        this.filterList = this.filterList.bind(this);
    }


    //确认是否已做
    editChange(id) {
        this.props.dispatch(editChange(id));
    }
    //删除
    removeItem(id) {
        this.props.dispatch(remove(id));
    }
    //确认编辑完成
    endEdit(data) {
        this.props.dispatch(endEdit(data));
    }

    filterList(num) {
        this.setState({
            filterNum: num
        })
    }

    render() {
        //在这里处理过滤显示的数据
        let filterData = (function() {
            if (this.state.filterNum == 1) {
                return this.props.getItemData;
            } else if (this.state.filterNum == 2) {
                return this.props.getItemData.filter((item) => {
                    return item.done
                }) 
            } else if (this.state.filterNum == 3) {
                return this.props.getItemData.filter((item) => {
                    return !item.done
                }) 
            }
        }).call(this);


        return(
            <div className={styles.list}>
                <SiderBar filterList={this.filterList} getItemData={this.props.getItemData}/>
             
                {
                    filterData && filterData.map((item, index)  => {
                        return <Items 
                        key={index} 
                        items={item} 
                        editChange={this.editChange} 
                        removeItem={this.removeItem}
                        endEdit={this.endEdit}
                        />
                    })
                }
                
            </div>
        )
    }
    
}

export default connect(
    (state) => {
        return {
            "getItemData": state.getItemData
        };
    }
)(List);