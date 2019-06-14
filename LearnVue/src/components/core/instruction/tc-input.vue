<template>
  <div>
    <input type="text" :value="value" @input="handleInput">
    <span>{{calcVal}}</span>
  </div>
</template>

<script>
export default {
  name: 'tc-input',
  data () {
    return {
      currentValue: ''
    }
  },
  methods: {
    handleInput (event) {
      this.currentValue = this.value = event.target.value
      this.$emit('input', event.target.value)
    }
  },
  computed: {
    calcVal () {
      return this.currentValue.split('').reverse().join('')
    }
  },
  props: {
    value: {
      type: [String, Number],
      default: '请输入一个值'
    }
  },
  mounted () {
    this.currentValue = this.value
  }
}
</script>

<style scoped>

</style>
