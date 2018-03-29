import React, { Component } from 'react';

import Heade from './header'
import Filter from './filter'
import List from './list'

class Todo extends Component{
    constructor() {
        super()
    }

    
    render() {
        return(
            <div>
                <Heade/>
                <Filter/>
                <List/>
            </div>
        )
    }   
}

export default Todo;

