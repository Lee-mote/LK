const menus = [
  {
    title: '阎罗殿',
    icon: 'home',
    path: '/'
  },
  {
    title: '十八层地狱',
    icon: 'appstore',
    path: '/products',
    children: [
      {
        title: '拔舌地狱',
        icon: 'bars',
        path: '/one'
      },
      {
        title: '剪刀地狱',
        icon: 'tool',
        path: '/two'
      },
      {
        title: '孽镜地狱',
        icon: 'key',
        path: '/three'
      },
      {
        title: '...',
        icon: 'history',
        path: '/four'
      },
      {
        title: '刀锯地狱',
        icon: 'fork',
        path: '/last'
      },
    ]
  },
  {
    title: '判官台',
    icon: 'user',
    path: '/user'
  },
  {
    title: '酆都城',
    icon: 'safety-certificate',
    path: '/role'
  },
  {
    title: '六道轮回',
    icon: 'area-chart',
    path: '/charts',
    children: [
      {
        title: '天道',
        icon: 'bar-chart',
        path: '/s-one'
      },
      {
        title: '人道',
        icon: 'pie-chart',
        path: '/s-two'
      },
      {
        title: '阿修罗道',
        icon: 'line-chart',
        path: '/s-three'
      },
      {
        title: '畜生道',
        icon: 'fall',
        path: '/s-four'
      },
      {
        title: '饿鬼道',
        icon: 'rise',
        path: '/s-five'
      },
      {
        title: '地狱道',
        icon: 'stock',
        path: '/s-six'
      }
    ]
  }
];

export default menus;
