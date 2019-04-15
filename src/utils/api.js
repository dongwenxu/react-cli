import axios from 'axios';
import qs from 'qs';
import ApiMap from 'src/config/apimap'


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.transformRequest = function (data,b) {
    if(data instanceof FormData){return data}
    if(!b["Content-Type"]) {
        return qs.stringify(data)
    }else {
        return data
    }

}

//添加请求拦截器
axios.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
});


//响应拦截器
axios.interceptors.response.use(response => {
    let data = response.data
    return typeof data === 'object' ? data : JSON.parse(data)
}, error => {
    return error.response || error;  // 返回接口返回的错误信息
})

let ajax = ({param = {},method = 'get',api,...options}) => {
    let config = {
        url: ApiMap[api] || api,
        method: method,
        ...options
    };
    if(method === 'get'){
        config.params = param
    }else {
        config.data = param
    }
    return axios(config).then(res => {
        return res;
    }, error => {
        return error;
    })
}

export default ajax;