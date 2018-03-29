import React, { Component } from 'react';
import { Checkbox, Icon  } from 'antd';
import styles from './index.less';

const done = {

}

class Items extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showInput: false
        }
        this.onChange = this.onChange.bind(this);
        this.editInput = this.editInput.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.endEdit = this.endEdit.bind(this);
        this.enterEdit = this.enterEdit.bind(this);
    }

    editInput() {
        this.setState({
            showInput: true
        })
    }

    onChange() {
        this.props.editChange(this.props.items.id);
    }

    removeItem() {
        this.props.removeItem(this.props.items.id);
    }

    enterEdit(event) {
        if(event.keyCode == 13) {
            this.endEdit();
        }
    }

    endEdit() {
        this.refs.getValue.value &&　this.props.endEdit({
            "id": this.props.items.id,
            "text": this.refs.getValue.value
        });
        this.setState({
            showInput: false
        })
    }


    showText() {
        return(
            this.props.items.done 
            ? 
            <span className={styles.edit}>
                        {this.props.items.text}
                    </span>
            : 
            <span className={styles.text} onClick={this.editInput}>
                        {this.props.items.text}
                    </span>
        )
    }

    render() {
        return(
            <div className={this.props.items.done ? styles.endItem : styles.item}>
                <Checkbox className={styles.checkbox} onChange={this.onChange} checked={this.props.items.done}/>
                
                {
                    this.state.showInput ? <input autoFocus ref="getValue" onBlur={this.endEdit} onKeyDown={this.enterEdit} className={styles.inputs}/> : this.showText()
                }
                
                <Icon type="close" className={this.props.items.done ? styles.iconEnd : styles.icon} onClick={this.removeItem}/>
            </div>
        )
    }
    
}

export default Items;