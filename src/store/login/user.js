/**
 * Created by jige on 2016/11/23.
 */
import { SIGNIN_USER, REMEMBER_USER } from '../mutation-types';

const state = {
    user: {
        id: 'defaultId',
        name: 'defaultName'
    },
    rememberMe: false
}

const mutations = {
    [SIGNIN_USER](oldState, payload) {
        state.user = payload;
    },
    [REMEMBER_USER](oldState, payload) {
        state.rememberMe = payload;
    }
}
/*
 * 登录接口
 *  useId、userName都是该接口写到cookie里面的
 *  使用时 需要从cookie里面获取
 * */
const actions = {
    signIn: ({ commit }) => {
        commit(SIGNIN_USER, {
            id: '234234',
            name: parseInt(Math.random() * 10000, 10)
        });
    },
    rememberChange({ commit }, rememberMe) {
        commit(REMEMBER_USER, rememberMe);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
