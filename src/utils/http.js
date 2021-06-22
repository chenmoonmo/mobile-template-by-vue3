/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
 import axios from 'axios';
 import QS from 'qs'
 
 if (process.env.NODE_ENV == 'development') {//测试
   axios.defaults.baseURL = '/';//本地跨域需配置代理
 } else if (process.env.NODE_ENV == 'production') {//生产
   axios.defaults.baseURL = 'http://m2.test.zyh365.com';
 }
 
 export const baseURL = axios.defaults.baseURL
 // 请求超时时间
 axios.defaults.timeout = 10000;
 
 // post请求头
 axios.defaults.headers.post['Content-Type'] = 'application/x-www-from-urlencoded';
 axios.defaults.headers.post['accept'] = '*/*';
 
 /** 
  * get方法，对应get请求 
  * @param {String} url [请求的url地址] 
  * @param {Object} params [请求时携带的参数] 
  */
 export function get(url, params) {
 
   return new Promise((resolve, reject) => {
     axios.get(url, {
       params: params
     })
       .then(res => {
         resolve(res.data);
       })
       .catch(err => {
         reject(err.data)
       })
   });
 }
 
 /** 
  * post方法
  * @param {String} api [请求的url地址] 
  * @param {Object} apidata [请求时携带的参数] 
  * @param {String} apimode [apimode] 
  * 
  */
 
 export function post(api, apidata, apimode = "vmsapi",) {
   apidata = JSON.stringify(apidata)
   return new Promise((resolve, reject) => {
     axios.post('/webproject/api/comm/currency.do', QS.stringify({ apimode, api, apidata }))
       .then(res => {
         resolve(res.data);
       })
       .catch(err => {
         reject(err.data)
       })
   });
 }
 
 