<template>
  <input class="switch" :class="className" type="checkbox" :disabled="disabled" v-model="value"/>
</template>

<script>
export default {
  props: {
    type: String,
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      twoWay: true
    },
  },
  ready () {},
  computed: {
    className () {
      return [
        this.type ? `switch-${this.type}` : '',
      ]
    }
  },
  watch: {
    value (newVal) {
      // this.$emit('on-change', newVal)

      // 通知父组件
      this.$dispatch('on-change', this.value);
    }
  }
}
</script>

<style>

</style>
