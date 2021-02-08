import Popup from './Popup'

const obj = {};

obj.install = function(Vue) {
  // 创建构造器
  const constructor = Vue.extend(Popup)
  // 通过 constructor 实例，创建一个组件对象，并通过$mount挂载到一个元素上。
  const popup = new constructor();
  popup.$mount(document.createElement('div'));
  // popup.$el 对应的就是div，将它添加到body
  document.body.appendChild(popup.$el);

  // 再将popup组件添加到vue原型里，方便调用
  Vue.prototype.$popup = popup;
}

export default obj;