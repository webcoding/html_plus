<template>
  <div class="page">
    <x-header type="fixed" :header="header"></x-header>
    <div class="page-content" @click="handle">
      标题栏
    </div>
  </div>
</template>

<script>

export default {
  name: 'navbar',
  data () {
    var headerInfo = {
      center: {
        tagname: 'title',
        value: ['Navbar'],
      },
      left: {
        tagname: 'back',   //注册事件
        value: '返回',     //显示文本，支持数组或复杂数据类型
        icon: 'back',  //icon 图标
        data: '',         //复杂数据结构
        //回调函数
        callback: function(){
          history.back();
        },
      },
      right: [
        {
          tagname: 'home',   //注册事件
          value: '',     //显示文本，支持数组或复杂数据类型
          icon: 'home',  //icon 图标
          data: '',         //复杂数据结构
          //回调函数
          callback: function(){
            console.log('返回首页');
          },
        }
      ],
    };
    return {
      header: headerInfo,
    }
  },
  methods: {
    handle: function(){
      console.log(this)
      console.log(111)
    },
  },
}
</script>

<style lang="less">

// .weui_article {
//     padding: 20px 15px;
//     font-size: 15px;
//     section {
//         margin-bottom: 1.5em;
//     }
//     h1 {
//         font-size: 17px;
//         font-weight:400;
//         margin-bottom: .75em;
//     }
//     h2 {
//         font-size: 16px;
//         font-weight:400;
//         margin-bottom: .3em;
//     }
//     h3 {
//         font-weight:400;
//         font-size: 15px;
//     }
// }
</style>
