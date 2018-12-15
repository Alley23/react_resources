import React,{Component} from 'react';
import styles from './index.scss';

class Message extends Component{
    constructor(){
        super()
        this.state = {
            type: 1,
            text: '',
            delayTime: 3000,
            isShow: false
        }
    }

    waring(data) {
        this.setState({
            type: 1,
            text: data,
            isShow: true
        }, () => {
            this.autoHide()
        })
    }

    error(data) {
        this.setState({
            type: 2,
            text: data,
            isShow: true
        }, () => {
            this.autoHide()
        })
    }

    success(data) {
        this.setState({
            type: 3,
            text: data,
            isShow: true
        }, () => {
            this.autoHide()
        })
    }

    normal(data) {
        this.setState({
            type: 1,
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
                isShow: false,
                type: 'normal',
            })
        },this.state.delayTime)
    }

    getType(num) {
        if (num === 1) {
            return styles.waring
        }else if(num === 2){
            return styles.error
        }else if(num === 3){
            return styles.success
        }else{
            return styles.normal
        }
    }

    render() {
        return(
            <div className={styles.mContent +" "+ this.getType(this.state.type) + (this.state.isShow ? " "+styles.mShow : " "+styles.mHide)}>
                <div>
                    {this.state.text}  
                </div>
            </div>
        )
    }
}

export default Message;