import React, {Component} from 'react';

import Header from '../components/header';
import Sidebar from '../components/sidebar';
import './index.less';


class App extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                <Header/>
                <Sidebar/>
                <div className="main-right">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;