import axios from "axios";
// Set config defaults when creating the instance
//自己创建一个axios实例，自己定义发送请求的url（像哪个地址发送请求）
//如果不自己定义的话每个请求前都要自己添加完整的域名，如果域名换了所有的url都要改变
//可以把myAsios理解为axios的一个实例
const myAxios = axios.create({
    baseURL: 'http://localhost:8080/api'//后端的统一请求地址
});
myAxios.defaults.withCredentials = true;//设置为true，表示发送请求时携带上请求的凭证。
//自定义健全的请求头
// Alter defaults after instance has been created
//instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

//可以在每个请求前或请求结束后做一些事情，比如说判断请求参数是否符合要求，如果不可以不让像后端发送请求
// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log('我要发送请求了',config)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 全局响应拦截器
myAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log('已经收到你的响应值了',response)
    // 未登录则跳转到登录页
    if (response?.data?.code === 40100) {
        const redirectUrl = window.location.href;
        window.location.href = `/user/login?redirect=${redirectUrl}`;
    }
    // Do something with response data
    return response.data;

}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default myAxios;
