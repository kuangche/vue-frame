import Vue from 'vue';
import Vuex from 'vuex';

import loginUser from './login/login';
import manageUser from './manage/manageUser';

Vue.use(Vuex);
export default new Vuex.Store({
    strict: true,
    modules: {
        user: loginUser,
        manageUser
    }
})
