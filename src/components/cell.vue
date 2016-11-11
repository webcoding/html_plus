
<!--
  TODO：没有 link时如何设定属性 
-->

<template>
  <a class="cell item item-line" :class="{'tap-active': isLink || !!link, 'item-link': isLink || !!link }" href="#!/{{link}}" @click="onClick">
    <div class="item-media"><slot name="icon"></slot></div>
    <div class="item-content">
      <div class="item-title" v-if="title">{{title}} <small>{{small}}</small></div>
      <div class="item-subtitle" v-if="subTitle">{{subTitle}}</div>
      <div class="item-desc" v-if="desc">{{desc}}</div>
    </div>
    <div class="item-after">
      <slot name="after"></slot>
    </div>
  </a>
</template>

<script>

export default {
  props: {
    isLink: Boolean,
    title: String,
    small: String,
    subTitle: String,
    desc: String,
    after: String,
    value: String,
    // primary: {
    //   type: String,
    //   default: 'title'
    // },
    link: {
      type: [String, Object]
    }
  },
  methods: {
    onClick () {
      // go(this.link, this.$router)
    }
  }
}
</script>

<style lang="sass">

</style>
