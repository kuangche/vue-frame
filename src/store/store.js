import Vue from 'vue';
import Vuex from 'vuex';

import loginUser from './login/user';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        user: loginUser,
    }
})
