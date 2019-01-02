<template>
  <div id='container'>
    <HelloWorld :msg = 'message'/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    data() {
        return {
            message: 234234
        }
    },
    components: {
        HelloWorld
    },
    mounted(){
        setInterval(()=> {
            this.message = parseInt(Math.random() * 100000);
        }, 1000)
    }
}
</script>

<style lang="scss">
  @import "assets/sass/main.scss";
</style>
