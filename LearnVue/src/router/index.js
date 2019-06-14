import Vue from 'vue'
import Router from 'vue-router'

// ==========vue核心学习=========
import vueCoreMain from '@comp/vueCoreMain'
import {
  insTest01
} from '@comp/core'

// =========elementUI 学习==========
import elementUI from '@comp/elementUI'
import {
  first,
  transition,
  baseLayout,
  gutterLayout,
  offsetLayout,
  flexLayout,
  responseLayout,
  containerBase,
  cbInstance,
  iconDemo,
  iconInstance,
  fontAwesome,
  vueAwesomeInstance,
  buttonDemo1,
  radioDemo1,
  checkboxDemo1
} from '@comp/eui'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/elui',
      name: 'elementUI',
      component: elementUI,
      children: [
        {
          path: '/first',
          name: 'firstExper',
          component: first
        }, {
          path: '/transition',
          name: 'transition',
          component: transition
        }, {
          path: '/baseLayout',
          name: 'baseLayout',
          component: baseLayout
        }, {
          path: '/gutterLayout',
          name: 'gutterLayout',
          component: gutterLayout
        }, {
          path: '/offsetLayout',
          name: 'offsetLayout',
          component: offsetLayout
        }, {
          path: '/flexLayout',
          name: 'flexLayout',
          component: flexLayout
        }, {
          path: '/responseLayout',
          name: 'responseLayout',
          component: responseLayout
        }, {
          path: '/containerBase',
          name: 'containerBase',
          component: containerBase
        }, {
          path: '/cbInstance',
          name: 'cbInstance',
          component: cbInstance
        }, {
          path: '/iconDemo',
          name: 'iconDemo',
          component: iconDemo
        }, {
          path: '/iconInstance',
          name: 'iconInstance',
          component: iconInstance
        }, {
          path: '/fontAwesome',
          name: 'fontAwesome',
          component: fontAwesome
        }, {
          path: '/vueAwesomeInstance',
          name: 'vueAwesomeInstance',
          component: vueAwesomeInstance
        }, {
          path: '/buttonDemo_1',
          name: 'buttonDemo_1',
          component: buttonDemo1
        }, {
          path: '/radioDemo1',
          name: 'radioDemo1',
          component: radioDemo1
        }, {
          path: '/checkboxDemo1',
          name: 'checkboxDemo1',
          component: checkboxDemo1
        }
      ]
    }, {
      path: '/vue',
      name: 'vueCoreMain',
      component: vueCoreMain,
      children: [{
        path: '/insTest01',
        name: 'insTest01',
        component: insTest01
      }]
    }
  ]
})
