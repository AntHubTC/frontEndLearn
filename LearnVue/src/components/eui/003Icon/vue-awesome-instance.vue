<template>
  <div>
    <h4></h4>
    <div>
      <p>
        安装方式：<br/>
        <code>npm i --save @fortawesome/fontawesome</code><br/>
        <code>npm i --save @fortawesome/vue-fontawesome</code><br/>
        <!--下面两个应该是图标库-->
        <code>npm i --save @fortawesome/fontawesome-free-brands</code><br/>
        <code>npm i --save @fortawesome/fontawesome-free-solid</code>
      </p>
      <p>
        参考资料：<br/>
        <a href="https://www.npmjs.com/package/@fortawesome/vue-fontawesome" target="_blank">npm vue-fontawesome</a><br/>
      </p>
      <p>
        使用：<br/>
        <font-awesome-icon icon="spinner" />
        <font-awesome-icon :icon="['fa', 'spinner']" />
        <font-awesome-icon :icon="['fab', 'font-awesome']" />
      </p>
    </div>
    <h1>
      <font-awesome-icon :icon="['fab', 'font-awesome']" />
      <font-awesome-icon :icon="['fas', 'coffee']" />
      <font-awesome-icon :icon="['fas', 'cog']" :spin="true" :fixed-width="false" />
      <font-awesome-icon :icon="['fab', 'fort-awesome']" size="4x" />
      <font-awesome-icon :icon="['fas', 'spinner']" :pulse="true" :fixed-width="true" />
      <font-awesome-icon :icon="['fab', 'fort-awesome']" :rotation="90" />
      <font-awesome-icon :icon="['fab', 'internet-explorer']" flip="both" />
    </h1>
    <div>
      <p>
        <font-awesome-icon :icon="['fas', 'quote-left']" size="2x" :border="true" pull="left" />...tomorrow we
        will run faster, stretch out our arms farther...And then one fine morning&mdash; So we beat on, boats
        against the current, borne back ceaselessly into the past.
      </p>
    </div>
    <div>
      <ul class="fa-ul">
        <li><font-awesome-icon :icon="['fas', 'check-square']" :list-item="true" />List icons</li>
        <li><font-awesome-icon :icon="['fas', 'check-square']" :list-item="true" />can be used</li>
        <li><font-awesome-icon :icon="['fas', 'square']" :list-item="true" />as bullets</li>
        <li><font-awesome-icon :icon="['fas', 'square']" :list-item="true" />in lists</li>
      </ul>
    </div>
    <div>
      <span>
        <font-awesome-icon :icon="['fab', 'font-awesome']" transform="grow-40 left-4 rotate-15" />
      </span>
      <span style="padding-left: 50px">
        <font-awesome-icon :icon="['fab', 'font-awesome']" :transform="{ flipX: false, flipY: false, rotate: 15, size: 56, x: -4, y: 0 }" />
      </span>
    </div>
    <br><br>
  </div>
</template>

<!--方式一-->
<!--<script>-->
<!--import FontAwesomeIcon from '@fortawesome/vue-fontawesome'-->
<!--import { faCoffee } from '@fortawesome/fontawesome-free-solid'-->

<!--export default {-->
  <!--name: 'vueAwesomeInstance',-->
  <!--computed: {-->
    <!--icon () {-->
      <!--return faCoffee-->
    <!--}-->
  <!--},-->
  <!--components: {-->
    <!--FontAwesomeIcon-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--方式二-->
<script>
import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faSpinner } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(brands, faSpinner)

Vue.use(fontawesome)

export default {
  name: 'vueAwesomeInstance',
  components: {
    FontAwesomeIcon
  }
}
</script>
<style scoped>

</style>
