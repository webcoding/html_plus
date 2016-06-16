import Vue from 'vue';
import VueRouter from 'vue-router';

// install router
Vue.use( VueRouter );

// routing
const router = new VueRouter();

router.map({
  '/': {
    name: 'index',  // 路径别名，可无
    component: require('./pages/index.vue')
  },
  '/about': {
    component: require('./pages/about.vue')
  },
  '/typography': {
    component: require('./pages/typography.vue')
  },
  '/button': {
    component: require('./pages/form/button.vue')
  },
  '/switch': {
    component: require('./pages/form/switch.vue')
  },
  '/grid': {
    component: require('./pages/grid.vue')
  },
  // '/modal': {
  //   component: require('./pages/modal.vue')
  // },
  '/navbar': {
    component: require('./pages/bar/navbar.vue')
  },
  // '/searchbar': {
  //   component: require('./pages/searchbar.vue')
  // },
  // '/toolbar': {
  //   component: require('./pages/toolbar.vue')
  // },
  // '/tabbar': {
  //   component: require('./pages/tabbar.vue')
  // },
  // '/content-block': {
  //   component: require('./pages/content-block.vue')
  // },
  // '/side': {
  //   component: require('./pages/side.vue')
  // },
  // '/grid': {
  //   component: require('./pages/grid.vue')
  // },
  // '/popup': {
  //   component: require('./pages/popup.vue')
  // },
  // '/list': {
  //   component: require('./pages/list.vue')
  // },
  // '/form': {
  //   component: require('./pages/form.vue')
  // },
  // '/actions': {
  //   component: require('./pages/action-sheet.vue')
  // },
  // '/picker': {
  //   component: require('./pages/picker.vue')
  // }
});

router.redirect({
  '*': '/'
})

export default router;
