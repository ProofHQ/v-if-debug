import DebugIf from '@/components/DebugIf'

export default {
  install (Vue, options) {
    Vue.component(DebugIf.name, {
      extends: DebugIf,
      data () {
        return {
          options
        }
      }
    })
  }
}
