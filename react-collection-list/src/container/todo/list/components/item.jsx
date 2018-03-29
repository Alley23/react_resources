import React, { Component } from 'react';
import '../index.less';
class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit : true,
            isDone: false
        }

        this.chengeDone = this.chengeDone.bind(this)
        this.removeHandle = this.removeHandle.bind(this)
    }

    componentDidMount() {
        //获取初始值
        this.setState({
            isDone: this.props.data.done
        })
    }

    chengeDone() {
        this.setState({
            isDone: !this.state.isDone
        },() => {
            this.props.changeDone(
                {
                    id: this.props.data.id,
                    type: this.state.isDone ? 2 : 1,
                    done: this.state.isDone
                }
            )
        })
        
    }

    removeHandle() {
        this.props.removeHandle(this.props.data.id)
    }

    render() {
        return (
            <li>
                <input type='checkbox' onChange={this.chengeDone} checked={this.state.isDone ? true : false}/>
                <span className={this.state.isDone ? "done" : ""}>
                    {this.props.data.text}
                </span>
                <div className="list-edit">
                    {
                        this.state.isEdit ? <span>编辑</span> : <span>完成</span>
                    }
                    <span onClick={this.removeHandle}>删除</span>
                </div>
            </li>
        )
    }
}

export default Item;