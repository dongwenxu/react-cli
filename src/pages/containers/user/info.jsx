import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";

export default class user2 extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
          
        }
    }
    componentWillMount() {}
    render() {
        return (
            <div className="g-default">
                <div>这是用户详情页面</div>
                <Link to={`/user`}>
                跳转至用户中心页面
                </Link>
            </div>
        )
    }
} 