/**
 * 功能：server
 * 作者：jige
 * 日期：2019/1/7.
 */
import axios from 'axios'

const service = axios.create({
    timeout: 30000,
    // headers:{ 'X-Custom-Header': 'foobar' }, 自定义请求头
    // method:'get',//默认是get

    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest: [function (data){
        return data
    }],
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data){
        return JSON.parse(data);
    }],
    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // 默认的
});

// 添加请求拦截器
service.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
});

// 添加相应拦截器
service.interceptors.response.use(res => {
    const { statusCode, message } = res.data;
    if ( statusCode === 200) {
        return res.data
    } else if (statusCode === 401) {
        location.replace(location.origin)
    }else {
        window.projectApp.$message({
            message,
            type: 'error'
        })
    }
}, error => {// 如果返回，会再进入实例的catch回调中。
    if(error.response){
        window.projectApp.$message({
            message: '服务器端错误😂！',
            type: 'error'
        })
    } else {
        window.projectApp.$message({
            message: `${error.message}！${error.stack}!`,
            type: 'error'
        })
    }
    return Promise.reject(error)
});

export default service;
