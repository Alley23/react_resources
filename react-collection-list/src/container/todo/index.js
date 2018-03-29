import React, { Component } from 'react';
import { connect } from "react-redux";
import { getListItemData, addItem, removeItem, changeDone} from '../../actions/todo';

import Heade from './header'
import Filter from './filter'
import List from './list'

class Todo extends Component{
    constructor() {
        super()
        this.state = {
            num: 1
        }

        this.addItemHandle = this.addItemHandle.bind(this)
        this.removeHandle = this.removeHandle.bind(this)
        this.changeDone = this.changeDone.bind(this)
        this.filterHandle = this.filterHandle.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(getListItemData())
    }

    //添加
    addItemHandle(value){
        this.props.dispatch(addItem(value))
    }
    //删除
    removeHandle(id) {
        this.props.dispatch(removeItem(id))
    }
    //改变状态
    changeDone(id) {
        this.props.dispatch(changeDone(id))
    }   
    
    //过滤
    filterHandle(num) {
        console.log('====================================');
        console.log(num);
        console.log('====================================');
        this.setState({
            num : num
        })
    }
    
    render() {

        let filterData = (function () {
            if (this.state.num == 1) {
                return this.props.getListItem;
            } else if (this.state.num == 2) {
                return this.props.getListItem.filter((item) => {
                    return item.done
                })
            } else if (this.state.num == 3) {
                return this.props.getListItem.filter((item) => {
                    return !item.done
                })
            }
        }).call(this);
        
        return(
            <div>
                <Heade addItemHandle={this.addItemHandle}/>
                <Filter filterHandle={this.filterHandle}/>
                <List 
                    data={filterData} 
                    removeHandle={this.removeHandle}
                    changeDone={this.changeDone}
                />
            </div>
        )
    }   
}

export default connect(
    (state) => {
        return {
            "getListItem": state.getListItem
        };
    }
)(Todo);

