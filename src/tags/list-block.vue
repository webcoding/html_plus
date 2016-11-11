<style lang="sass">

// @import "../_styles/components/list-block";

</style>

<template>

<div class="plus-list-block list-block">
  <ul class="item-line">
    <li v-for="item in items">
      <a class="item item-link item-line" v-link="item.link">
        <div v-if="item.icon" class="item-media iconfont {{item.icon}}"></div>
        <div class="item-content">
          <div class="item-title">{{ item.title }} <small>{{ item.enTitle }}</small></div>
          <div class="item-subtitle">{{ item.subTitle }}</div>
          <div class="item-desc">{{ item.description }}</div>
        </div>
        <div class="item-after">{{ item.badge }}</div>
      </a>
    </li>
  </ul>
</div>

</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: []
    },
  },
}

</script>
