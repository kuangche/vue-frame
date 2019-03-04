/**
 * Created by jige on 2016/11/23.
 */
import { Tools } from '@/common/utils';
import server from '@/common/server'
import { SIGNIN_USER, REMEMBER_USER } from '../mutation-types';

const state = {
    user: {
        id: Tools.getCookie('userId'),
        name: Tools.getCookie('userName')
    },
    rememberMe: !(Tools.isEmpty(Tools.getCookie('rememberMe')) || Tools.getCookie('rememberMe') === 'false')
}
const mutations = {
    [SIGNIN_USER](oldState, user) {
        state.user = user;
    },
    [REMEMBER_USER](oldState, rememberMe) {
        state.rememberMe = rememberMe;
    }
}
/*
 * 登录接口
 *  useId、userName都是该接口写到cookie里面的
 *  使用时 需要从cookie里面获取
 * */
const actions = {
    signIn: ({ commit }, data) => new Promise((resolve) => {
        server({
            url: '/user/login',
            method: 'post',
            data: {
                username: data.username,
                password: data.password,
                rememberMe: data.rememberMe
            }
        }).then((response) => {
            const userId = Tools.getCookie('userId');
            const userName = Tools.getCookie('userName');
            commit(SIGNIN_USER, {
                id: userId,
                name: userName
            });
            resolve(response)
        })
    }),
    rememberChange({ commit }, rememberMe) {
        commit(REMEMBER_USER, rememberMe);
        Tools.setCookie('rememberMe', rememberMe)
    }
}
export default {
    state,
    mutations,
    actions
}
