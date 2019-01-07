/**
 * Created by jige on 2016/11/21.
 */
// 按模块打包
const login = () => import('./views/login/login.vue');
const manageUser = () => import('./views/manage/user.vue');
const manageRole = () => import('./views/manage/role.vue');

// 定义路由，为每个路由映射一个组件
export default[
    { path: '/', name: 'login', component: login },
    { path: '/login', name: 'login', component: login },
    { path: '/manage', name: 'manage', redirect: { name: 'manage-user' } },
    { path: '/manage/user', name: 'manage-user', component: manageUser },
    { path: '/manage/role', name: 'manage-role', component: manageRole }
]
