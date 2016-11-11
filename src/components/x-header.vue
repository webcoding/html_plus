<template>
  <div class="x-header navbar">
    <div class="x-header-left" transition="sliding">
      <x-header-item v-if="header.left" :option="header.left"></x-header-item>
      <slot name="left"></slot>
    </div>
    <div class="x-header-center" transition="sliding">
      <div class="title">{{header.center.value[0]}}</div>
      <div v-if="header.center.value[1]" class="sub-title">{{header.center.value[1]}}</div>
      <slot name="center"></slot>
    </div>
    <div class="x-header-right" transition="sliding">
      <template v-if="header.right" v-for="item in header.right">
        <x-header-item :option="item"></x-header-item>
      </template>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
/*
此处结构，需要扩展
center: {
  tagname: 'title',
  value: ['标题'],
},
right: [{
  tagname: 'back',  //注册事件
  value: '返回',     //显示文本，支持数组或复杂数据类型
  icon: 'back',     //icon 图标
  data: '',         //复杂数据结构
  //回调函数
  callback: function(){},
}]
**/

// import XHeaderItem from './item.vue';

export default {
  // components: {
  //   XHeaderItem
  // },
  props: {
    header: {
      type: Object,
      default: {
        center: {
          type: Object,
          default () {
            return {
              tagname: 'title',
              value: ['标题'],
            }
          },
        },
        left: {
          type: [Boolean, Object],
          default () {
            return {
              tagname: 'back',   //注册事件
              value: '返回',     //显示文本，支持数组或复杂数据类型
              icon: 'back', //icon 图标
              data: '',         //复杂数据结构
              //回调函数
              callback: function(){
                history.back();
              },
            }
          },
        },
        right: {
          type: Array,
          default () {
            return [];
          }
        }
      },
    },
  },
  ready() {
    console.log(2222)
    console.log(this)
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style>

</style>
