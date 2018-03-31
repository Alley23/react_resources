import React, { Component } from 'react';
import Message from '../../../components/message/index.jsx';
import './index.scss';
class Header extends Component{
    constructor() {
        super()
        this.state = {
            value: ''
        }
        
        this.addItemHandle = this.addItemHandle.bind(this)
        this.keydownHandle = this.keydownHandle.bind(this)
        this.changeHandle = this.changeHandle.bind(this)
    }
    //输入内容
    changeHandle(event) {
        this.setState({
            value: event.target.value
        })
    }
    //回车
    keydownHandle(event) {
        if (event.keyCode == 13) {
            this.addItemHandle()
        }
    }
    //添加事项
    addItemHandle() {
        //判断是否有值
        if (!this.state.value) {
            this.refs.message.waring("请填写内容！")
            return
        }
        this.props.addItemHandle(this.state.value)
        this.refs.message.success("添加成功！")
        this.setState({
            value: ''
        })
    }

    render() {
        return(
            <div className="todo-header">
                <input type='text' placeholder="请输入事项" onChange={this.changeHandle} onKeyDown={this.keydownHandle} value={this.state.value}/>
                <span onClick={this.addItemHandle}>添加</span>
                <Message ref="message"/>
            </div>
        )
    }
}

export default Header;