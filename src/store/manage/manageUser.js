/**
 * Created by jige on 2016/11/23.
 */

import server from '@/common/server'
import { SET_PAGE_NO_USER_MANAGE, SET_PAGE_SIZE_USER_MANAGE, SET_PAGE_TOTAL_USER_MANAGE, SET_USER_LIST_USER_MANAGE } from '../mutation-types'

const state = {
    pageNo: 1,
    pageSize: 10,
    total: null,
    searchTxt: '',
    userList: null
}
const mutations = {
    [SET_PAGE_NO_USER_MANAGE](oldState, payload) {
        state.pageNo = payload;
    },
    [SET_PAGE_SIZE_USER_MANAGE](oldState, payload) {
        state.pageSize = payload;
    },
    [SET_PAGE_TOTAL_USER_MANAGE](oldState, payload) {
        state.total = payload;
    },
    [SET_USER_LIST_USER_MANAGE](oldState, payload) {
        state.userList = payload;
    }
}
const actions = {
    getListUser: ({ commit }, data) => new Promise((resolve) => {
        server({
            url: '/manage/getUserList',
            method: 'post',
            data: {
                userId: data.userId,
                pageNo: data.pageNo,
                pageSize: data.pageSize,
                searchTxt: data.searchTxt
            }
        }).then((response) => {
            const userList = response.bodyData.bodyData;
            const totalSize = response.bodyData.total;
            commit(SET_USER_LIST_USER_MANAGE, userList);
            commit(SET_PAGE_TOTAL_USER_MANAGE, totalSize);
            resolve(userList)
        })
    }),
    delUser: userId => new Promise((resolve) => {
        server({
            url: '/manage/delUser',
            type: 'post',
            data: {
                userId
            }
        }).then((response) => {
            resolve(response)
        })
    }),
    setPageNoUser: ({ commit }, pageNo) => {
        commit(SET_PAGE_NO_USER_MANAGE, pageNo)
    },
    setPageSizeUser: ({ commit }, pageSize) => {
        commit(SET_PAGE_SIZE_USER_MANAGE, pageSize)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
