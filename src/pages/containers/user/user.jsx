import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";

export default class user extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
          
        }
    }
    componentWillMount() {}
    render() {
        return (
            <div className="g-default">
                <div>这是用户中心页面</div>
                <Link to={`/user/info`}>
                跳转至用户详情页面<br/>
                </Link>
                <Link to={`/index`}>
                跳转至首页
                </Link>
            </div>
        )
    }
} 