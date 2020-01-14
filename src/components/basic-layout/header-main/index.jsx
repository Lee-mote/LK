import React, { Component } from 'react';
import { Button, Icon, Modal } from 'antd';
import screenfull from 'screenfull';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeItem } from '$utils/storage';
import { removeUser } from '$redux/actions';
import './index.less';

@connect(state => ({ username: state.user.user && state.user.user.username }), {
  removeUser
})
@withRouter
class HeaderMain extends Component {
  state = {
    isScreenfull: false
  };
  componentDidMount() {
    screenfull.on('change', this.handleScreenFullChange);
  }
  handleScreenFullChange = () => {
    this.setState({
      isScreenfull: !this.state.isScreenfull
    });
  };
  componentWillUnmount() {
    screenfull.off('change', this.handleScreenFullChange);
  }
  screenFull = () => {
    screenfull.toggle();
  };
  logout = () => {
    Modal.confirm({
      title: '你走吧?',
      onOk: () => {
        removeItem('user');
        this.props.removeUser();
        this.props.history.replace('/login');
      }
    });
  };

  render() {
    const { isScreenfull } = this.state;
    const { username } = this.props;

    return (
      <div className='header-main'>
        <div className='header-main-top'>
          <Button size='small' onClick={this.screenFull}>
            <Icon type={isScreenfull ? 'fullscreen-exit' : 'fullscreen'} />
          </Button>
          <Button className='header-main-lang' size='small'>
            English
          </Button>
          <span>hello, {username}~~</span>
          <Button size='small' type='link' onClick={this.logout}>
            还阳
          </Button>
        </div>
        <div className='header-main-bottom'>
          <span className='header-main-left'>生死薄</span>
          <span className='header-main-right'>阴间2020/1/14 子时三刻</span>
        </div>
      </div>
    );
  }
}

export default HeaderMain;
