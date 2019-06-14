<template>
  <div>
    <div class="box">
      <el-button @click="show1 = !show1">Click me</el-button>
      <div class="tc-container mt10">
        <!--通过transition组建，通过name指定动画效果-->
        <transition name="el-fade-in-linear">
          <div v-show="show1" class="transition-box">.el-fade-in-linear</div>
        </transition>
        <transition name="el-fade-in">
          <div v-show="show1" class="transition-box">.el-fade-in</div>
        </transition>
      </div>
    </div>
    <div class="box">
      <el-button @click="show2 = !show2">Click me</el-button>
      <div class="tc-container mt10">
        <!--通过transition组建，通过name指定动画效果-->
        <transition name="el-zoom-in-center">
          <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
        </transition>
        <transition name="el-zoom-in-top">
          <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
        </transition>
        <transition name="el-zoom-in-bottom">
          <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
        </transition>
      </div>
    </div>
    <div class="box">
      <el-button @click="show3 = !show3">Click Me</el-button>
      <div style="margin-top: 20px; height: 200px;">
        <el-collapse-transition>
          <div v-show="show3">
            <div class="transition-box">el-collapse-transition</div>
            <div class="transition-box">el-collapse-transition</div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tc-transition',
  data () {
    return {
      show1: true,
      show2: true,
      show3: true
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tc-container
    display:flex
    margin-top:20
    height: 100px

  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
