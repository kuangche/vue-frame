import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import 'mlString'
import 'mlArray'
import store from '@/store/store'
import routes from '@/routes'
import App from '@/App.vue'
import { Tools } from '@/common/utils';

// 开发环境下加载mock数据
if (process.env.NODE_ENV === 'development') {
    import('@/common/mockData')
}

Vue.use(ElmentUI);
Vue.use(Vuex);
Vue.use(VueRouter);

// 创建router实例，然后传入routers配置
const router = new VueRouter({
    // mode: 'history',
    routes
});

// 注册一个全局的 before 钩子,管理用户登录跳转
router.beforeEach(({ path }, from, next) => {
    const rememberMe = Tools.getCookie('rememberMe');
    const userId = Tools.getCookie('userId');
    const userName = Tools.getCookie('userName');
    if (!Tools.isEmpty(userId) && !Tools.isEmpty(userName)) {
        if ((rememberMe === 'true' && path === '/login') || (rememberMe === 'true' && path === '/')) {
            // 更换成自己的主页
            return next({ path: '/manage' });
        }
    } else if (path !== '/login') {
        return next({ path: '/login' });
    }
    next();
    return false;
});

window.projectApp = new Vue({
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
}).$mount('#app');
