import React, { Component } from 'react';
import { Link } from 'react-router';
import "./index.scss";

class Header extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="main-left">
                <ul>
                {
                    this.props.data && this.props.data.map((item, index) => {
                        return(
                            <li>
                                <Link className="nav" key={item.id} to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

export default Header;