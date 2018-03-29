import React, {Component} from 'react';

import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import './index.less';


class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            navData: [
                {
                    'id': 1,
                    'url': '/',
                    'title': 'Home Test'
                },
                {
                    'id': 2,
                    'url': '/new',
                    'title': 'New Test'    
                },
            ]
        }
    }

    render(){
        return(
            <div>
                <Header/>
                <Sidebar data={this.state.navData}/>
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