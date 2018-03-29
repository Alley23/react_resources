import React, { Component } from 'react';
import './index.less';
class Filter extends Component{
    constructor() {
        super()
    }

    render() {
        return(
            <div className="todo-filter">
                <p className="filter-title">条件筛选</p>
                <div className="filter-type">
                    <div>全部<span>（12）</span></div>
                    <div>已做<span>（4）</span></div>
                    <div>未做<span>（8）</span></div>
                </div>
            </div>
        )
    }
}

export default Filter;