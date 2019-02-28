import Vue from 'vue';
import Vuex from 'vuex';

import loginUser from './login/user';
import manageUser from './manage/user/user';

Vue.use(Vuex);
export default new Vuex.Store({
    strict: true,
    modules: {
        user: loginUser,
        manageUser
    }
})
