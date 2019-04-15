import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";

export default class index extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
          
        }
    }
    componentWillMount() {}
    render() {
        return (
            <div className="g-default">
                <div>这是活动页面</div>
                <Link to={`/index`}>
                跳转至首页
                </Link>
            </div>
        )
    }
} 