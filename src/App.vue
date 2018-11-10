<template>
  <div id="app">
    <div>
      <h2>Directive Example With Label</h2>
      <pre>v-if-debug="{ label: 'Label Example', value: labelVal }"</pre>

      <div v-if-debug="{ label: 'Label Example', value: labelVal }">
        <p>I am hidden by default. If you can see me then v-if-debug is working!</p>
      </div>
    </div>

    <div>
      <h2>Directive Example No Label</h2>
      <pre>v-if-debug="noLabelVal"</pre>

      <div v-if-debug="noLabelVal">
        <p>I am hidden by default. If you can see me then v-if-debug is working!</p>
      </div>
    </div>

    <div>
      <h2>v-else Example</h2>
      <p>v-else is a bit more complicated. To use with v-else you need to use the component directly.</p>

      <pre>
&lt;DebugIf :condition=&quot;elseVal&quot; label=&quot;v-else Example&quot;&gt;
  &lt;p slot-scope=&quot;{show}&quot; v-if=&quot;show&quot;&gt;I am hidden by default. If you can see me then v-if-debug is working!&lt;/p&gt;
&lt;/DebugIf&gt;</pre>

      <DebugIf :condition="elseVal" label="v-else Example">
        <div slot-scope="{show}">
          <p v-if="show">
            I am hidden by default. If you can see me then v-if-debug is working!
          </p>

          <p v-else>
            I am shown by default, if you can see me that doesn't mean anything!
          </p>
        </div>
      </DebugIf>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app",
    data () {
      return {
        labelVal: false,
        noLabelVal: false,
        elseVal: false
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 24px;

    @media (min-width: 700px) {
      display: grid;
      grid-template-columns: repeat(3, 33%);
      grid-gap: 24px;
      margin: 32px;
    }

    pre {
      border: solid 1px lightgray;
      padding: 24px;
      text-align: left;
      background: whitesmoke;
      overflow: auto;
    }
  }
</style>
