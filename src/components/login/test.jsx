import React from 'react';
import axios from 'axios';
import {message} from 'antd';

export default function Test(){
    const axiosInstance = axios.create(
        {
            baseURL:'/api',
            timeout:20000,
            headers:{

            }
        }
    );
    axiosInstance.interceptors.request.use(
        config=>{
            if(token){
                config.headers.authorization=`Bearer ${token}`;
            }
            if(config.method==='post'){
                const keys=Object.keys(config.data);
                const data=keys
                .reduce((prev,cur)=>{
                    prev+=`&${curr}=${config.data[curr]}`;
                    return prev;
                },' ')
                .slice(1);
                config.data=date;
                config.headers['content-type']='application/x-www-form-urlencoded';
            }
            return config;
        }
    );
    let token = '';
  let id = '';
  const handleClick1 = () => {
    axiosInstance({
      method: 'POST',
      url: '/login',
      data: {
        username: 'admin',
        password: 'admin'
      },
    })
      .then(response => {
        console.log(response);

        if (response.data.status === 0) {
          token = response.data.data.token;
          message.success('登录成功');
        } else {
          message.error(response.data.msg);
        }
      })
      .catch(err => {
        console.log(err);
        message.error('网络错误');
      });
  };

  const handleClick2 = () => {
    axiosInstance({
      method: 'POST',
      url: '/category/add',
      data: {
        categoryName: '手机'
      }
    })
      .then(response => {
        if (response.data.status === 0) {
          id = response.data.data._id;
          message.success('添加成功');
        } else {
          message.error(response.data.msg);
        }
      })
      .catch(err => {
        console.log(err);
        message.error('网络错误');
      });
  };

  const handleClick3 = () => {
    axiosInstance({
      method: 'POST',
      url: '/category/delete',
      data: {
        categoryId: id
      }
    })
      .then(response => {
        if (response.data.status === 0) {
          message.success('删除分类成功');
        } else {
          message.error(response.data.msg);
        }
      })
      .catch(err => {
        console.log(err);
        message.error('网络错误');
      });
  };

  return (
    <div>
      <button onClick={handleClick1}>按钮1</button>
      <button onClick={handleClick2}>按钮2</button>
      <button onClick={handleClick3}>按钮3</button>
    </div>
  );
}

