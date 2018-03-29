import React, { Component } from 'react';
import Item from './components/item.jsx'
import './index.less';
class List extends Component{
    constructor() {
        super()
    }

    render() {
        return(
            <ul className="todo-list">
                
                <li>
                    <input type='checkbox' /><span>测试文本</span>
                    <div className="list-edit">
                        <span>编辑</span>
                        <span>完成</span>
                        <span>删除</span>
                    </div>
                </li>
                <li>
                    <input type='checkbox' /><span>测试文本</span>
                </li>
                <li>
                    <input type='checkbox' /><span>测试文本</span>
                </li>
                <li>
                    <input type='checkbox' /><span>测试文本</span>
                </li>
            </ul>
        )
    }
}

export default List;