<template>
  <div id='container'>
    <p>name:{{ name }}</p>
    <p>id:{{ id }}</p>
    <button @click="signIn">changeName</button>
    <HelloWorld :msg = 'message'/>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import server from 'server'
import HelloWorld from './components/HelloWorld.vue'

const { mapState, mapActions } = createNamespacedHelpers('user/');
export default {
    name: 'App',
    data() {
        return {
            message: 222334,
        }
    },
    components: {
        HelloWorld
    },
    computed: {
        ...mapState({
            name: state => state.user.name,
            id: state => state.user.id
        })
    },
    methods: {
        ...mapActions(['signIn', 'rememberChange']),
    },
    mounted(){
        setInterval(() => {
            this.message = parseInt(Math.random() * 100000, 10);
        }, 1000);

        server({
            url: '/manage/delUser',
            method: 'post',
            data: {
                id: 21
            }
        }).then((response) => {
            this.$message({
                message: response.message,
                type: 'success'
            })
        })
    }
}
</script>

<style lang="scss">
  @import "assets/sass/main.scss";
</style>
