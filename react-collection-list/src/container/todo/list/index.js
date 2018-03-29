import React, { Component } from 'react';
import Item from './components/item.jsx'
import './index.less';
class List extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <ul className="todo-list">
                {
                    this.props.data && this.props.data.map((item, index) => {
                        return <Item 
                        key={item.id} 
                        data={item} 
                        removeHandle={this.props.removeHandle}
                        changeDone={this.props.changeDone}
                        editEndHandle={this.props.editEndHandle}
                        />
                    })
                }
                {/* <li>
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
                </li> */}
            </ul>
        )
    }
}

export default List;