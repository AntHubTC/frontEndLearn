<template>
  <div class="first-comp">
    <el-button @click="visible = true">el-button</el-button>
    <el-dialog :visible.sync="visible" title="el-dialog">
      <div class="el-alert--info">
        <a href="https://elementui.github.io/theme-chalk-preview/#/zh-CN" target="_blank">在线主题生成工具</a>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'tc-first',
  data () {
    return {
      visible: false
    }
  }
}
</script>
<style type="text/css">
  .first-comp{
    margin-top: 10px;
  }
</style>
