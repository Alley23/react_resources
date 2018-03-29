import React, { Component } from 'react';
import '../index.less';
class Item extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <li>
                <input type='checkbox' />
                <span>测试文本</span>
                <div>
                    <span>编辑</span>
                    <span>完成</span>
                    <span>删除</span>
                </div>
            </li>
        )
    }
}

export default Item;