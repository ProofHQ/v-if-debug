import Vue from 'vue'
import IfContainer from '@/components/IfContainer'
import DebugIf from '@/components/DebugIf'

export default Vue.directive('if-debug', {
  inserted: function (el, { value }) {
    const propVal = typeof value === 'boolean'
      ? { label: '', value }
      : value
    const container = Vue.extend(IfContainer)
    new container({
      propsData: {
        condition: propVal.value,
        label: propVal.label,
        content: el.innerHTML
      }
    }).$mount(el)
  }
})