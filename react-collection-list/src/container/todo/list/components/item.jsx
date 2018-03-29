import React, { Component } from 'react';
import Message from '../../../../components/message/index.jsx';
import '../index.less';
class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit : true,
            isDone: false,
            normalText: ''
        }

        this.chengeDone = this.chengeDone.bind(this)
        this.removeHandle = this.removeHandle.bind(this)
        this.editText = this.editText.bind(this)
        this.editBtn = this.editBtn.bind(this)
        this.endBtn = this.endBtn.bind(this)
    }

    componentDidMount() {
        //获取初始值
        this.setState({
            isDone: this.props.data.done,
            normalText: this.props.data.text
        })
    }

    chengeDone() {
        this.setState({
            isDone: !this.state.isDone
        },() => {
            this.props.changeDone({
                id: this.props.data.id,
                done: this.state.isDone
            })
        })
        
    }
    //编辑
    editBtn() {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }
    //完成
    endBtn() {
        if(!this.state.normalText){
            this.refs.message.waring("请填写内容！")
            return
        }
        this.setState({
            isEdit: !this.state.isEdit
        },() => {
            this.props.editEndHandle({
                id: this.props.data.id,
                text: this.state.normalText
            })
        })
    }

    editText(event) {
        this.setState(
            {
                normalText: event.target.value
            }
        )
    }

    removeHandle() {
        this.props.removeHandle(this.props.data.id)
    }

    render() {
        return (
            <li>
                <input type='checkbox' onChange={this.chengeDone} checked={this.state.isDone ? true : false}/>
                {
                    this.state.isEdit ? 
                    <span className={this.state.isDone ? "done" : ""}>
                        {this.props.data.text}
                    </span>
                     : 
                    <input className="input-text" type='text' value={this.state.normalText} onChange={this.editText} autoFocus/>
                }
                
                
                <div className="list-edit">
                    {
                        this.state.isEdit ? 
                            (this.state.isDone ? " " : <span onClick={this.editBtn}>编辑</span>) 
                        : <span onClick={this.endBtn}>完成</span>
                    }
                    <span onClick={this.removeHandle}>删除</span>
                </div>
                <Message ref="message"/>
            </li>
        )
    }
}

export default Item;