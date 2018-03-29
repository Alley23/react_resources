import React, { Component } from 'react';
import { connect } from "react-redux";
import { getListItemData, addItem, removeItem, changeDone} from '../../actions/todo';

import Heade from './header'
import Filter from './filter'
import List from './list'

class Todo extends Component{
    constructor() {
        super()

        this.addItemHandle = this.addItemHandle.bind(this)
        this.removeHandle = this.removeHandle.bind(this)
        this.changeDone = this.changeDone.bind(this)
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
    changeDone(value) {
        this.props.dispatch(changeDone(value))
    }   
    
    
    render() {
        return(
            <div>
                <Heade addItemHandle={this.addItemHandle}/>
                <Filter/>
                <List 
                    data={this.props.getListItem} 
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
)(Todo);;

