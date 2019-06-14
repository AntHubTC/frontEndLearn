<template>
  <div>
    <h2><a href="https://cn.vuejs.org/" target="_blank">VUE核心基础学习</a></h2>
    <div>
      <div>
        <a v-on:click="instruFlag = !instruFlag" href="javascript:void(0)">指令</a>
        <el-collapse-transition>
          <div v-show="instruFlag" class="mt10">
            <router-link class="a-class button" to="/insTest01">尝试让组件支持v-model</router-link>
          </div>
        </el-collapse-transition>
      </div>
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'vueCoreMain',
  data () {
    return {
      instruFlag: false
    }
  }
}
</script>
<style type="text/css">

</style>
