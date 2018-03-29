import React,{ Component } from 'react';
import { Link } from 'react-router';
import './index.less';


class IndexItem extends Component{
    constructor(){
        super()
        this.state = {
            data: [
                {
                    "id": 1,
                    "title": "A-1-001",
                    "desc": "A-1-001 测试"
                },
                {
                    "id": 2,
                    "title": "A-2-002",
                    "desc": "A-2-002 测试"
                },
                {
                    "id": 3,
                    "title": "A-3-003",
                    "desc": "A-3-003 测试"
                },
                {
                    "id": 4,
                    "title": "A-4-004",
                    "desc": "A-4-004 测试"
                },
                {
                    "id": 5,
                    "title": "A-5-005",
                    "desc": "A-5-005 测试"
                },
                {
                    "id": 6,
                    "title": "A-6-006",
                    "desc": "A-6-006 测试"
                },
                {
                    "id": 7,
                    "title": "A-7-007",
                    "desc": "A-7-007 测试"
                },
            ]
        }
    }

    render(){
        return(
            <div className="new-list">
                {
                    this.state.data && this.state.data.map((item, inde) => {
                        return(
                            <div className="new-item" key={item.id}>
                                <h1 className="title">{item.title}</h1>
                                <p className="desc">{item.desc}</p>
                                <Link to={"/desc/"+item.id} className="herf">查看全部内容</Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default IndexItem;