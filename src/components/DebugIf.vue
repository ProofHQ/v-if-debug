<template>
  <div class="debugIf">
    <slot :show="show"></slot>
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
      override: null
    }
  },
  computed: {
    show () {
      return this.override === null ? this.condition : this.override
    }
  }
}
</script>
