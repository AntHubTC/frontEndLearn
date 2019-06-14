<template>
  <div>
    <h2><a href="http://element-cn.eleme.io/#/zh-CN/component/installation" target="_blank">Element-UI学习</a></h2>
    <div>
      <div>
        <a v-on:click="basicFlag = !basicFlag" href="javascript:void(0)">入门体验</a>
        <el-collapse-transition>
          <div v-show="basicFlag" class="mt10">
            <router-link class="a-class button" to="/first">体验一</router-link>
            <router-link class="a-class button" to="/transition">体验二</router-link>
          </div>
        </el-collapse-transition>
      </div>
      <div>
        <a v-on:click="layoutFlag = !layoutFlag" href="javascript:void(0)">布局</a>
        <el-collapse-transition>
          <div v-show="layoutFlag" class="mt10">
            <router-link class="a-class button" to="/baseLayout">基础布局</router-link>
            <router-link class="a-class button" to="/gutterLayout">分栏间隔</router-link>
            <router-link class="a-class button" to="/offsetLayout">分栏偏移</router-link>
            <router-link class="a-class button" to="/flexLayout">flex灵活对齐方式</router-link>
            <router-link class="a-class button" to="/responseLayout">响应式布局</router-link>
          </div>
        </el-collapse-transition>
      </div>
      <div>
        <a v-on:click="containerFlag = !containerFlag" href="javascript:void(0)">Container 布局容器</a>
        <el-collapse-transition>
          <div v-show="containerFlag" class="mt10">
            <router-link class="a-class button" to="/containerBase">基础体验</router-link>
            <router-link class="a-class button" to="/cbInstance">实例</router-link>
          </div>
        </el-collapse-transition>
      </div>
      <div>
        <a v-on:click="iconFlag = !iconFlag" href="javascript:void(0)">icon图标</a>
        <el-collapse-transition>
          <div v-show="iconFlag" class="mt10">
            <router-link class="a-class button" to="/iconDemo">基础体验</router-link>
            <router-link class="a-class button" to="/iconInstance">element实例</router-link>
            <router-link class="a-class button" to="/fontAwesome">fontAwesome使用</router-link>
            <router-link class="a-class button" to="/vueAwesomeInstance">vue awesome使用</router-link>
          </div>
        </el-collapse-transition>
      </div>
      <div>
        <a v-on:click="buttonFlag = !buttonFlag" href="javascript:void(0)">button按钮</a>
        <el-collapse-transition>
          <div v-show="buttonFlag" class="mt10">
            <router-link class="a-class button" to="/buttonDemo_1">demo1</router-link>
          </div>
        </el-collapse-transition>
      </div>
      <div>
        <a v-on:click="formFlag = !formFlag" href="javascript:void(0)">Form表单</a>
        <el-collapse-transition>
          <div v-show="formFlag" class="mt10">
            <router-link class="a-class button" to="/radioDemo1">radio-demo1</router-link>
            <router-link class="a-class button" to="/checkboxDemo1">checkbox-Demo1</router-link>
          </div>
        </el-collapse-transition>
      </div>
      <hr>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tc-elementUI',
  data () {
    return {
      basicFlag: false,
      layoutFlag: false,
      containerFlag: false,
      iconFlag: false,
      buttonFlag: false,
      formFlag: false
    }
  }
}
</script>
<style type="text/css">

</style>
