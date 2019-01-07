<template>
    <frame-component>
        <div 
            id="main" 
            class="userManage">
            <div class="contentBox">
                <div class="location"><span>用户管理</span><span class="split">></span><span>用户信息</span></div>

                <div class="dataTable">
                    <el-table :data="userList">
                        <el-table-column 
                            prop="userName" 
                            label="用户名"/>
                        <el-table-column 
                            prop="company" 
                            label="所属单位"/>
                        <el-table-column 
                            prop="email" 
                            label="邮箱"/>
                        <el-table-column 
                            prop="phone" 
                            label="联系方式"/>
                        <el-table-column 
                            prop="roleName" 
                            label="管理角色"/>
                        <el-table-column 
                            inline-template 
                            :context="_self" 
                            label="操作" 
                            width="300">
                            <span class="operateCon">
                                <el-button 
                                    type="text" 
                                    size="small" 
                                    @click="deleteUserHandle($index, row)">删除</el-button>
                            </span>
                        </el-table-column>
                    </el-table>
                </div>

                <div class="dataPage">
                    <el-pagination
                        @current-change="currentUserChangeHandle"
                        @size-change="handleSizeChange"
                        :current-page="pageNo"
                        :page-size="pageSize"
                        :page-sizes="[5,10, 15, 20]"
                        layout="total, sizes, prev, pager, next"
                        :total="total"/>
                </div>
            </div>
        </div>
    </frame-component>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import FrameComponent from '@/components/frame.vue';

const { mapState, mapActions } = createNamespacedHelpers('manageUser/');

export default {
    components: {
        FrameComponent
    },
    data() {
        return {
            pageSearchTxt: ''
        }
    },
    computed: {
        // 不在当前模块里面的state,使用this.$store.state
        userId(){
            return this.$store.state.user.user.id
        },
        // store 分割成模块（module）,该名称（manageUser）和store.js里面的module名称对应
        ...mapState({
            pageNo: state => state.pageNo,
            pageSize: state => state.pageSize,
            searchTxt: state => state.searchTxt,
            total: state => state.total,
            userList: state => state.userList
        })
    },
    methods: {
        // store 分割成模块（module）,该名称（manageUser）和store.js里面的module名称对应
        ...mapActions([
            'getListUser',
            'delUser'
        ]),
        initPage() {
            this.getListUser({
                userId: this.userId,
                searchTxt: this.searchTxt || '',
                pageNo: this.pageNo || 1,
                pageSize: this.pageSize
            });
        },
        deleteUserHandle($index, row) {
            this.$confirm(`此操作将删除 ${row.userName}`, '是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.delUser(row.userId).then(() => {
                    this.$message.success('删除成功!');
                    this.initPage();
                }, (message) => {
                    this.$message.error(message);
                })
            }).catch(() => {
                this.$message.info('已取消删除');
            });
        },
        currentUserChangeHandle(val) {
            this.setPageNoUser(val);
            this.initPage();
        },
        handleSizeChange(val) {
            this.setPageSizeUser(val);
            this.initPage();
        }
    },
    mounted() {
        this.initPage();
    }
}
</script>
