<template>
  <div class="debugIf">
    <div v-if="override ? override || condition : condition">
      <slot></slot>
    </div>
    <button v-if="DEBUG_MODE" class="debugBtn" @click="override = !override">Turn override {{override ? 'OFF' : 'ON'}}</button>
  </div>
</template>
<script>
export default {
  name: 'DebugIf',
  props: {
    condition: Boolean
  },
  data () {
    return {
      DEBUG_MODE: true,
      override: false
    }
  }
}
</script>
