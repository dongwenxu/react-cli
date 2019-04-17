import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";
import * as common from 'src/pages/action/home'
import ajax from 'src/utils/api'
import connect from 'src/pages/action/common'


@connect(common)
class index extends PureComponent {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentWillMount() {
        console.log(this.props)
    }
    getList() {
        ajax({
            api: 'list',
            method: 'get',      
        }).then((res) => {
             console.log(res);
        })
    }    
    render() {
        const { PriceIncrease, PriceDecrease } = this.props;
        return (
            <div className="g-default">
                <div>默认页</div>
                <Link to={`/login`}>
                跳转至登录<br/>
                </Link>
                <Link to={`/user`}>
                跳转到用户中心页面
                </Link>
                <div>
                    <p>数值：{this.props.market}</p>
                </div>
                <button onClick={PriceIncrease}>物价上涨</button>
                <button onClick={PriceDecrease}>物价下跌</button>
                <div>
                    <p><button onClick={this.getList}>获取列表</button></p>
                </div>
            </div>
        )
    }
} 
export default index;