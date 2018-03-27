import React, {Component} from 'react';

import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Main from '../components/main';


class App extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                <Header/>
                <Sidebar/>
                <Main>
                    {this.props.children}
                </Main>
            </div>
        )
    }
}

export default App;