import React, { Component } from 'react';
import { connect } from "react-redux";
import './index.scss';


class Filter extends Component{
    constructor() {
        super()
        this.state = {
            navNum: 1
        }
    }

    filterHandle(num) {
        this.setState({
            navNum: num
        })
        this.props.filterHandle(num)
    }

    render() {

        let all = this.props.getListItem.length, done = 0
        this.props.getListItem && this.props.getListItem.map((item, index) => {
            if (item.done) {
                done++
            }
        })

        return(
            <div className="todo-filter">
                <p className="filter-title">条件筛选</p>
                <div className="filter-type">
                    <div 
                        className={this.state.navNum === "1" ? "current" : ""} 
                        onClick={this.filterHandle.bind(this,"1")}
                    >
                    全部<span>（{all}）</span>
                    </div>
                    <div 
                        className={this.state.navNum === "2" ? "current" : ""}
                        onClick={this.filterHandle.bind(this,"2")}
                    >
                    已做<span>（{done}）</span>
                    </div>
                    <div 
                    className={this.state.navNum === "3" ? "current" : ""}
                    onClick={this.filterHandle.bind(this,"3")}
                    >
                    未做<span>（{all - done}）</span>
                    </div>
                </div>
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
)(Filter);