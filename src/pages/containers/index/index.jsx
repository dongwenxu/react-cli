import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import * as action from 'src/pages/action/home'
import ajax from 'src/utils/api'

class index extends PureComponent {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentWillMount() {
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
                    <p>数值：{this.props.price}</p>
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

//获取指定state数据
function mapStateToProps(state) {
    return {
        price: state.market
    }
}

//触发action
function mapDispatchToProps(dispatch) {
    return {
        PriceIncrease: () => dispatch(action.getListDataAction()),
        PriceDecrease: () => dispatch({ type: '降价' }),
    }
}


export default index = connect(mapStateToProps, mapDispatchToProps)(index);