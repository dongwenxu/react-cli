const Index = () => import('./containers/index/index');
const Login = () => import('./containers/login/login');
const Action = () => import('./containers/action/action');
const User = () => import('./containers/user/user');
const Info = () => import('./containers/user/info');

const config = [
   {
       path: '/index',
       title: '首页',
       name: 'index',
       component: Index
   },
   {
       path: '/login',
       title: '登录',
       name: 'login',
       component: Login
   },
   {
        path: '/Action',
        title: '活动',
        name: 'action',
        component: Action
   },
   {
       path: '/user',
       title: '用户中心',
       name: 'user',
       component: User,
       children: [
           {
                path: '/user/info',
                title: '用户详情',
                name: 'info',
                component: Info
           }
       ]
   },
   {
    path: '*',
    title: '首页',
    component: Index,
    name: 'index',
  }
]

export default config;