import Vue from 'vue'
import App from './App.vue'

var bus = new Vue();
var app = new Vue ({
  el: '#app',
  template: '<App/>',
  components: {App}
})
