<template>
  <div id="app">
    Condition: {{ival}}
    <DebugIf :condition="ival">
      <div slot-scope="{show}" v-if="show">
        Conditional debug content
      </div>
    </DebugIf>
  </div>
</template>

<script>
import DebugIf from "./components/DebugIf"

export default {
  name: "app",
  components: {
    DebugIf
  },
  data () {
    return {
      ival: false
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
