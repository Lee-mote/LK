import React, { Component } from 'react';
import { Form, Input, Button, Icon ,message} from 'antd';
import logo from '../../assets/imgs/logo.png';
import './index.less';
import { connect } from 'react-redux';
import { saveUserAsync } from '$redux/actions';
import withCheckLogin from '$cont/with-check-login';

const { Item } = Form;

@withCheckLogin
@connect(null, { saveUserAsync })
@Form.create()
class Login extends Component {
  validator = (rule, value, callback) => {
    const name = rule.field === 'username' ? '用户名' : '密码';
    const reg = /^\w+$/;

    if (!value) {
      callback(`${name}不能为空`);
    } else if (value.length < 4) {
      callback(`${name}必须大于4位`);
    } else if (value.length > 15) {
      callback(`${name}必须小于15位`);
    } else if (!reg.test(value)) {
      callback(`${name}只能包含英文、数字、下划线`);
    }
    callback();
  };
  login = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;
        this.props
          .saveUserAsync(username, password)
          .then(() => {
            this.props.history.replace('/');
          })
          .catch(msg => {
            message.error(msg);
            this.props.form.resetFields(['password']);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt='logo' />
          <h1>地府项目: 来嗨吖后台管理系统</h1>
        </header>
        <section className='login-section'>
          <h3>用户登录</h3>
          <Form className='login-form' onSubmit={this.login}>
            <Item>
              {getFieldDecorator('username', {
                rules: [
                  {
                    validator: this.validator
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder='用户名'
                />
              )}
            </Item>
            <Item>
              {getFieldDecorator('password', {
                rules: [
                  {
                    validator: this.validator
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder='密码'
                />
              )}
            </Item>
            <Item>
              <Button className='login-form-btn' type='primary' htmlType='submit'>
                登录
              </Button>
            </Item>
          </Form>
        </section>
      </div>
    );
  }
}

export default Login;
