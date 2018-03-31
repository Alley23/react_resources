import React,{Component} from 'react';
import './index.scss';

class Message extends Component{
    constructor(){
        super()
        this.state = {
            type: 'noraml',
            text: '',
            isShow: false
        }
    }

    waring(data) {
        this.setState({
            type: 'waring',
            text: data,
            isShow: true
        }, () => {
            this.autoHide()
        })
    }

    error(data) {
        this.setState({
            type: 'error',
            text: data,
            isShow: true
        }, () => {
            this.autoHide()
        })
    }

    success(data) {
        this.setState({
            type: 'success',
            text: data,
            isShow: true
        }, () => {
            this.autoHide()
        })
    }

    normal(data) {
        this.setState({
            type: 'noraml',
            text: data,
            isShow: true
        }, () => {
            this.autoHide()
        })
    }

    autoHide() {
        let _this = this
        setTimeout(() => {
            _this.setState({
                isShow: false
            })
        },3000)
    }

    render() {
        return(
            <div className={"m-content "+ this.state.type + (this.state.isShow ? " m-show" : " m-hide")}>
                <div className="m-text">
                    {this.state.text}  
                </div>
            </div>
        )
    }
}

export default Message;