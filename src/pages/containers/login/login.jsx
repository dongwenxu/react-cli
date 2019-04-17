import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";

export default class index extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
          
        }
    }
    componentWillMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div className="g-default">
                <div>这是登录页面</div>
                <Link to={`/action`}>
                跳转至活动页面
                </Link>
            </div>
        )
    }
} 
