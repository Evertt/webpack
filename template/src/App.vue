<template lang="pug">
  #app
    img(src="./assets/logo.png")
    {{#router}}
    router-view
    {{else}}
    hello
    {{/router}}
</template>

{{#unless router}}
<script>
import Hello from './components/Hello.vue'

@Component
export default class App extends Vue {
  static components = { Hello }
}
</script>
{{/unless}}

<style lang="stylus">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px
</style>
