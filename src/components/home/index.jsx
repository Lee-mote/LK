import React, { Component } from 'react'

import withCheckLogin from '$cont/with-check-login';

@withCheckLogin
class Home extends Component {
  render() {
    return <h1>welcome to DIFU！！！</h1>
  }
}

export default Home;
