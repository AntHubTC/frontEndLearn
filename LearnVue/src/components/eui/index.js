// 方法一
// let text = '哈哈'
// export {
//   text
// }
// 方法二
// let tt = '哈哈'
// export {
//   tt as text
// }
// 方法三
// module.exports.text = '哈哈'

// 方法四
// export var text = '哈哈'

import first from '@comp/eui/000experience/tc-first'
import transition from '@comp/eui/000experience/tc-transition'
import baseLayout from '@comp/eui/001layout/baseLayout'
import gutterLayout from '@comp/eui/001layout/gutterLayout'
import offsetLayout from '@comp/eui/001layout/offsetLayout'
import flexLayout from '@comp/eui/001layout/flexLayout.vue'
import responseLayout from '@comp/eui/001layout/responseLayout.vue'
import containerBase from '@comp/eui/002ContainerLayout/ContainerBase.vue'
import cbInstance from '@comp/eui/002ContainerLayout/cbInstance.vue'
import iconDemo from '@comp/eui/003Icon/iconDemo.vue'
import iconInstance from '@comp/eui/003Icon/iconInstance.vue'
import fontAwesome from '@comp/eui/003Icon/font-awesome.vue'
import vueAwesomeInstance from '@comp/eui/003Icon/vue-awesome-instance.vue'
import buttonDemo1 from '@comp/eui/004button/buttonDemo-1.vue'
import radioDemo1 from '@comp/eui/005form/radioDemo_1.vue'
import checkboxDemo1 from '@comp/eui/005form/checkboxDemo_1.vue'

export {
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
}
