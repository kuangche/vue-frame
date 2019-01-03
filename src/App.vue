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
        }, 1000)
    }
}
</script>

<style lang="scss">
  @import "assets/sass/main.scss";
</style>
