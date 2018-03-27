import React, { Component } from 'react';
import "./index.less";


class Main extends Component {
    render() {
        return (
            <div className="main-right">
                {this.props.children}
            </div>
        )
    }
}

export default Main;