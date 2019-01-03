<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: {
            type: Number,
            default: 0,
            required: true,
            validator(value) {
                return value >= 0
            }
        }
    },
    mounted(){
        console.log('mounted')
    }
}
</script>
