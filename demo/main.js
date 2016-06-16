'use strict'

import VueH5Plus from '../src';
import Vue from 'vue';

Vue.use( VueH5Plus );

// import Router from 'vue-router'

// install router
// Vue.use(Router)

// routing
// var router = new Router()

import router from './router';

// register filters globally
// import App form './App';
// router.start(App, '#app');

router.start(require( './App.vue' ), '#app');
// router.start(require( './App.vue' ), 'body');

// import fastClick from 'fastclick';
// fastClick.attach( document.body );
