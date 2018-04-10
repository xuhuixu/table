// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Routers from './router/router.js';
import 'whatwg-fetch';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
require('font-awesome-webpack');
import 'ms-signalr-client';
var moment = require('moment');
var echarts = require('echarts');

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(iView);

const RouterConfig = {
  routes: Routers
};
const router = new VueRouter(RouterConfig);
Vue.prototype.urlConfig = 'http://localhost:49655'; //全局url

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
