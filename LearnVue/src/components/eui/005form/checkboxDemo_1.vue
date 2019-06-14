<template>
  <div>
    <div>
      <h4>基础用法</h4>
      <el-checkbox v-model="checked" >备选项</el-checkbox>
    </div>
    <div>
      <h4>禁用状态</h4>
      <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
      <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
    </div>
    <div>
      <h4>多选框组</h4>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </div>
    <div>
      <h4>indeterminate 状态</h4>
      <p>用以表示 checkbox 的不确定状态，一般用于实现全选的效果</p>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div>
      <h4>可选项目数量的限制</h4>
      <p>使用 min 和 max 属性能够限制可以被勾选的项目的数量。</p>
      <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div>
      <h4>按钮样式</h4>
      <p>只需要把el-checkbox元素替换为el-checkbox-button元素即可。此外，Element 还提供了size属性。</p>
      <div>
        <el-checkbox-group v-model="checkboxGroup1">
          <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup2" size="medium">
          <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup3" size="small">
          <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div style="margin-top: 20px">
        <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
          <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
    </div>
    <div>
      <h4>带有边框</h4>
      <p>设置border属性可以渲染为带有边框的多选框。</p>
      <el-checkbox label="备选项1" border></el-checkbox>
    </div>
    <h3>后面的相关element-ui例子就不再敲了，具有一定的相似性，觉得看官方的文档就足够了。<a
      href="http://element-cn.eleme.io/#/zh-CN/component/installation">官方文档</a></h3>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']

export default {
  name: 'checkbox-demo_1',
  data () {
    return {
      checked: true,
      checked1: true,
      checked2: false,
      checkList: ['选中且禁用', '复选框 A'],
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      checkboxGroup1: ['上海'],
      checkboxGroup2: ['上海'],
      checkboxGroup3: ['上海'],
      checkboxGroup4: ['上海']
    }
  },
  methods: {
    handleCheckAllChange (val) {
      // val值是true或者false
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      // console.info(value) // value值是选中的列表值
      let checkedCount = value.length
      this.checkAll = checkedCount === cityOptions.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < cityOptions.length
    }
  }
}
</script>

<style scoped>

</style>
