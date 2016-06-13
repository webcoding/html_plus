
<!--
  TODO: 双向数据绑定未做
-->

<template>
  <div class="page">
    <div class="page-content">
      <div class="content-padded">
        <p>如果开关带特定功能怎么办？如密码开关，显示 ...以及 ABC 等，设定 type 类型，控制不同的种类，本质只是 UI 变化</p>
      </div>
      <group title="default">
        <div class="list-block">
          <cell title="default setting">
            <div slot="after"><switch></switch></div>
          </cell>
          <cell title="default true">
            <div slot="after"><switch :value="true"></switch></div>
          </cell>
        </div>
      </group>

      <group title="disabled">
        <div class="list-block">
          <cell title="default setting">
            <div slot="after"><switch disabled></switch></div>
          </cell>
          <cell title="default true">
            <div slot="after"><switch :value="true" disabled></switch></div>
          </cell>
        </div>
      </group>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    value: {
      type: Boolean,
    },
  },
  data: function(){
    return {
      value: false,
    };
  },
  events: {
    //监听子组件变化，不过还不是 twoway 方式
    'on-change': function(newValue){
      this.value = newValue;
      console.log(this.value)
    },
  },
  // methods: {
  //   notify: function () {
  //     this.$dispatch('on-change', this.value);
  //   }
  // }
}
</script>
