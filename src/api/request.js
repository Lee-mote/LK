//封装axios请求
import axios from 'axios';
import errCode from '../config/error-code';

const axiosInstance = axios.create({
    baseURL: '/api', 
    timeout: 20000, 
    headers: {      
    }
  });
  axiosInstance.interceptors.request.use(config=>{
      let token='';
      if(token){
          config.headers.authorzation=`Bearer ${token}`;
      }
      if(config.method==='post'){
          config.data=Object.keys(config.data)
          .reduce((prev,curr)=>{
              prev +=`&${curr}=${config.data[curr]}`;
              return prev;
          },'')
          .slice(1);
          config.headers['content-type'] = 'application/x-www-form-urlencoded';
      }
      return config;
  });

axiosInstance.interceptors.response.use(
    response => {
      if (response.data.status === 0) {
        return response.data.data;
      } else {
        return Promise.reject(response.data.msg);
      }
    },
    err => {
      let errMsg = '';
      if (err.response) {
        errMsg = errCode[err.response.status];
      } else {
        if (err.message.indexOf('Network Error') !== -1) {
          errMsg = '网络连接失败，请重新连接网络试试';
        } else if (err.message.indexOf('timeout') !== -1) {
          errMsg = '网络连接超时，请连上wifi试试';
        }
      }
      return Promise.reject(errMsg || '发生未知错误，请联系管理员~');
    }
  );
  
  export default axiosInstance;
  