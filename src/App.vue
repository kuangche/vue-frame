<template>
  <div id='container'>
    <HelloWorld :msg = 'message'/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

const myData = {
    name: 'kj',
    age: 23234
}
export default {
    name: 'App',
    data() {
        return {
            message: 2334,
            ...myData
        }
    },
    components: {
        HelloWorld
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
