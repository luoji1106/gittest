import axios from 'axios'

/* axios请求会返回一个promise函数，所以直接将这个promise函数返回 */
export function axiosRequest(config) {
  // 创建axios实例
  const instance = new axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 1000
  })
  
  // 设置axios的拦截器 axios.interceptors是全局拦截器，这里用axios的实例instance的拦截器
    // 添加请求拦截器(两个参数都是函数。第一个参数是请求成功时拦截，第二个是请求失败时拦截)
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config;
  },err => {
    // console.log(err);
  })

  // 添加响应拦截器(两个参数都是函数。第一个参数是成功时拦截，第二个是请求失败时拦截)
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data;
  },err => {
    // console.log(err);
  })

  return instance(config)
}
