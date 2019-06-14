<template>
  <div>
    <a href="http://element-cn.eleme.io/#/zh-CN/component/radio">radio官方指南</a>
    <div>
      <h4>基础用法</h4>
      <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。 <br/>
        要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。</p>
    </div>
    <el-row>
      <el-radio v-model="radioVar1" label="0">是</el-radio>
      <el-radio v-model="radioVar1" label="1">否</el-radio>
    </el-row>
    <p>
      你选的是: <u>{{['是','否'][radioVar1]}}</u>
    </p>
    <div>
      <h4>禁用状态</h4>
      单选框不可用的状态。 <br/>
      只要在el-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用。
    </div>
    <el-row>
      <template>
        <el-radio disabled v-model="radioVar2" label="禁用">备选项</el-radio>
        <el-radio disabled v-model="radioVar2" label="选中且禁用">备选项</el-radio>
      </template>
    </el-row>
    <div>
      <h4>单选框组</h4>
      <span>适用于在多个互斥的选项中选择的场景</span>
    </div>
    <el-row>
      <template>
        <el-radio-group v-model="radioVar3">
          <el-radio :label="3">备选项1</el-radio>
          <el-radio :label="6">备选项2</el-radio>
          <el-radio :label="9">备选项3</el-radio>
        </el-radio-group>
      </template>
    </el-row>
    <div>
      <h4>单选按钮组</h4>
    </div>
    <div>
      <el-radio-group v-model="radioVar4">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radioVar5" size="medium">
        <el-radio-button label="上海" ></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radioVar6" size="small">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京" disabled ></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radioVar7" disabled size="mini">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div>
      <h4>带有边框</h4>
      <div>
        <el-radio v-model="radioVar8" label="1" border>备选项1</el-radio>
        <el-radio v-model="radioVar8" label="2" border>备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio v-model="radioVar9" label="1" border size="medium">备选项1</el-radio>
        <el-radio v-model="radioVar9" label="2" border size="medium">备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radioVar10" size="small">
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border disabled>备选项2</el-radio>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radioVar11" size="mini" disabled>
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'radio-demo_1',
  data () {
    return {
      // 值是默认的选择的项
      radioVar1: '1',
      radioVar2: '选中且禁用',
      radioVar3: 6, // 这里不能用字符串'6'
      radioVar4: '上海',
      radioVar5: '北京',
      radioVar6: '广州',
      radioVar7: '深圳',
      radioVar8: '1',
      radioVar9: '2',
      radioVar10: '2',
      radioVar11: '1'
    }
  }
}
</script>

<style scoped>

</style>
