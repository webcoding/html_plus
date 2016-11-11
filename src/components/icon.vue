<template>
  <i class="{{className}}"></i>
</template>

<script>
export default {
  props: {
    type: String
  },
  computed: {
    className () {
      return `iconfont icon-${this.type}`
    }
  }
}
</script>
