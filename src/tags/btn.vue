<template>
  <a class="btn" :class="{
    'active':active,
    'btn-round':round,
    'btn-big':big,
    'btn-fill':fill
    }">
    <slot></slot>
  </a>
</template>


//要这么多同类型的标签干嘛，需要合并，通过数据及类型来处理
<script type="text/babel">
  export default {
    props: {
      active: {
        type: Boolean,
        default: false
      },
      round: {
        type: Boolean,
        default: false
      },
      big: {
        type: Boolean,
        default: false
      },
      fill: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
