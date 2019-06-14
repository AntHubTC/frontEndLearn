<template>
  <div>
    <tc-input v-model="val"></tc-input>
    <div>
      你输入的值是：{{val}}
    </div>
  </div>
</template>

<script>
import TcInput from './tc-input'

export default {
  name: 'insTest01',
  data () {
    return {
      val: ''
    }
  },
  components: {TcInput}
}
</script>

<style scoped>

</style>
