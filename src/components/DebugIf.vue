<template>
  <div class="debugIf">
    <slot :show="show"></slot>
    <div v-if="options.enable" class="select">
      <label v-if="label">{{label}}</label>
      <select v-model="override">
        <option :value="null">Actual Value</option>
        <option :value="true">True</option>
        <option :value="false">False</option>
      </select>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DebugIf',
    props: {
      condition: Boolean,
      label: String
    },
    data () {
      return {
        override: null,
        selectRef: null
      }
    },
    computed: {
      show () {
        if (!this.options.enable) return this.condition
        return this.override === null ? this.condition : this.override
      }
    },
    mounted () {
      if (this.options.enable) {
        let container = document.getElementById('debug-if-container')

        if (!container) {
          document.body.classList.add(['debugIfPadBottom'])
          container = document.createElement('div')
          container.setAttribute('id', 'debug-if-container')
          document.body.appendChild(container)

          const dismiss = document.createElement('button')
          dismiss.setAttribute('class', 'dismiss')
          dismiss.innerText = 'Dismiss'
          dismiss.addEventListener('click', () => {
            container.remove()
            document.body.classList.remove(['debugIfPadBottom'])
          })

          container.appendChild(dismiss)
        }

        this.selectRef = this.$el.getElementsByClassName('select')[0]
        container.appendChild(this.selectRef)
      }
    },
    destroyed () {
      this.selectRef.remove()
      let container = document.getElementById('debug-if-container')
      if (container.getElementsByClassName('select').length === 0) {
        document.body.classList.remove(['debugIfPadBottom'])
        container.remove()
      }
    }
  }
</script>

<style lang="scss">
  body.debugIfPadBottom {
    margin-bottom: 57px;
  }

  #debug-if-container {
    box-sizing: border-box;
    position: fixed;
    z-index: 1000000;
    bottom: 0;
    border-top: solid 1px lighten(#0095f7, 5);
    width: 100%;
    padding-left: 8px;
    background-color: lighten(#0095f7, 15);

    .dismiss {
      position: absolute;
      right: 32px;
      top: 24px;
      border: none;
      border-radius: 5px;
      height: 24px;
      padding: 0 12px;
      background: white;
      color: #0095f7;
      cursor: pointer;

      &:hover {
        background: #0095f7;
        color: white;
      }
    }

    .select {
      display: inline-block;
      padding: 24px;

      label {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: 400;
        font-size: 14px;
        margin-right: 8px;
        color: white;
      }

      select {
        height: 24px;
        outline: none;
      }
    }
  }
</style>
