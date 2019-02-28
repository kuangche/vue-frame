import frame from './frame.vue';

const FrameComponent = {
    install(Vue) {
        // 注册并获取组件，然后在main.js中引用，在Vue.use()就可以了
        Vue.component('FrameComponent', frame)
    }
}

export default FrameComponent;
