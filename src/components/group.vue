<template>
  <div class="group" :class="className">
    <div class="group-header" v-if="title" v-html="title"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      default: 'list-block'
    },
    text: String,
    title: String,
  },
  computed: {
    className () {
      return [
        this.type ? `group-${this.type}` : '',
      ]
    }
  }
}
</script>


<style>

</style>
