import React, { Component } from 'react';
import './index.less';
class Header extends Component{
    constructor() {
        super()
    }

    render() {
        return(
            <div className="todo-header">
                <input type='text' placeholder="请输入事项"/>
                <span>添加</span>
            </div>
        )
    }
}

export default Header;