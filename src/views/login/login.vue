<template>
    <div class="loginCon">
        <div class="iconBg"/>
        <div id="loginBox">
            <h3 class="header">欢迎登录</h3>
            <form>
                <div class="userName">
                    <input
                        type="text"
                        v-focus
                        v-model="form.username"
                        name="userName"
                        @focus="focusHandle"
                        @keyup.13="loginHandle"
                        placeholder="请输入用户名">
                </div>
                <div class="passWord">
                    <input
                        type="password"
                        v-model="form.password"
                        name="userName"
                        @focus="focusHandle"
                        @keyup.13="loginHandle"
                        placeholder="请输入密码">
                </div>
                <div class="operate">
                    <span
                        class="tips"
                        v-if="showTips">{{ tipsTxt }}</span>
                    <el-checkbox
                        class="remember"
                        :value="rememberMe"
                        @change = "rememberHandle">下次自动登录</el-checkbox>
                </div>
                <span
                    class="loginBtn"
                    @click="loginHandle">登录</span>
            </form>
        </div>
    </div>
</template>
<script>
import { Tools } from '@/common/utils';
import $ from 'jquery';
import { mapActions, mapState } from 'vuex';

export default{
    data() {
        return {
            showTips: false,
            tipsTxt: null,
            form: {
                username: null,
                password: null
            }
        }
    },
    computed: mapState({
        rememberMe: state => state.user.rememberMe,
        userId: state => state.user.user.id
    }),
    methods: {
        ...mapActions({
            signIn: 'signIn',
            rememberChange: 'rememberChange'
        }),
        rememberHandle(value) {
            this.rememberChange(value);
        },
        focusHandle() {
            this.showTips = false;
            this.tipsTxt = '';
        },
        loginHandle() {
            if (!Tools.isEmpty(this.form.username) && !Tools.isEmpty(this.form.password)) {
                // 登录正常
                this.signIn(Object.assign({}, this.form, { rememberMe: this.rememberMe })).then(() => {
                    this.showTips = false;
                    // 跳转首页
                    this.$router.push({ name: 'manage' });
                    this.$store.state.user.user.userName = 'jige1111111'
                }, (message) => {
                    // 登录异常
                    this.showTips = true;
                    this.tipsTxt = message;
                    $('#loginBox').removeClass().addClass('shake animated')
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            $(this).removeClass();
                        });
                })
            } else if (Tools.isEmpty(this.form.username)) {
                this.showTips = true;
                this.tipsTxt = '用户名不能为空';
                $('#loginBox').removeClass().addClass('shake animated')
                    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).removeClass();
                    });
            } else if (Tools.isEmpty(this.form.password)) {
                this.showTips = true;
                this.tipsTxt = '密码不能为空';
                $('#loginBox').removeClass().addClass('shake animated')
                    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).removeClass();
                    });
            }
        }
    }
}
</script>
