<template>
  <DebugIf :label="label" :condition="condition">
    <div slot-scope="{show}" v-if="show">
      <div v-html="content"></div>
    </div>
  </DebugIf>
</template>

<script>
  import DebugIf from '@/components/DebugIf'

  export default {
    name: 'IfContainer',
    props: ['label', 'condition', 'content'],
    components: { DebugIf }
  }
</script>

