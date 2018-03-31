import React, {Component} from 'react';
import { connect } from "react-redux";

import { getSideBarData } from '../../actions/sidebar';

import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import styles from './index.scss';


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

    componentDidMount(){
        this.props.dispatch(getSideBarData())
    }

    render(){
        return(
            <div>
                <Header/>
                <Sidebar data={this.props.getNavData}/>
                <div className={styles.mainRight}>
                    <div className={styles.container}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}



export default connect(
    (state) => {
        return {
            "getNavData": state.getSideBarData
        };
    }
)(App);;