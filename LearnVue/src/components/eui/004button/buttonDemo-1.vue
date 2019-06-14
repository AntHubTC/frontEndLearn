<template>
  <div>
    <p>普通按钮</p>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <p>加plain</p>
    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>
    <p>加round</p>
    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>
    <p>图标按钮</p>
    <el-row>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <!--图标加右边-->
      <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </el-row>
    <p>加图标icon,圆形按钮加circle：</p>
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
    <p>组合使用</p>
    <el-row>
      <el-button circle plain>圆角按钮</el-button>
      <el-button type="primary" circle plain>主要按钮</el-button>
      <el-button type="success" circle plain>成功按钮</el-button>
      <el-button type="info" circle plain>信息按钮</el-button>
      <el-button type="warning" circle plain>警告按钮</el-button>
      <el-button type="danger" circle plain>危险按钮</el-button>
    </el-row>
    <p>禁用状态disabled</p>
    <el-row>
      <el-button circle plain disabled>圆角按钮</el-button>
      <el-button type="primary" circle plain disabled>主要按钮</el-button>
      <el-button type="success" circle plain disabled>成功按钮</el-button>
      <el-button type="info" circle plain disabled>信息按钮</el-button>
      <el-button type="warning" circle plain disabled>警告按钮</el-button>
      <el-button type="danger" circle plain disabled>危险按钮</el-button>
    </el-row>
    <p>文字按钮</p>
    <el-row>
      <el-button type="text">文字按钮</el-button>
      <el-button type="text" plain>文字按钮</el-button>
      <el-button type="text" plain round>文字按钮</el-button>
      <el-button type="text" plain circle>文字按钮</el-button>
      <el-button type="text" disabled>文字按钮</el-button>
    </el-row>
    <p>按钮组</p>
    <el-row>
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
    </el-row>
    <p>
      加载中<br>
      点击按钮后进行数据加载操作，在按钮上显示加载状态。<br/>
      要设置为 loading 状态，只要设置loading属性为true即可。
    </p>
    <el-row>
      <el-button type="primary" :loading="true">加载中</el-button>
    </el-row>
    <p></p>
    <el-row>
      <el-button-group>
        <el-button type="primary" :loading="!loadingFlag" @click="loadingFlag = !loadingFlag">按钮1</el-button>
        <el-button type="primary" :loading="loadingFlag" @click="loadingFlag = !loadingFlag">按钮2</el-button>
      </el-button-group>
    </el-row>
    <p>
      不同尺寸 <br/>
      Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。 <br/>
      额外的尺寸：medium、small、mini，通过设置size属性来配置它们。
    </p>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小按钮</el-button>
    </el-row>
    <p></p>
    <el-row>
      <el-button round>默认按钮</el-button>
      <el-button size="medium" round>中等按钮</el-button>
      <el-button size="small" round>小型按钮</el-button>
      <el-button size="mini" round>超小按钮</el-button>
    </el-row>
    <br><br>
  </div>
</template>

<script>
export default {
  name: 'buttonDemo1',
  data () {
    return {
      loadingFlag: false
    }
  }
}
</script>

<style scoped>

</style>
