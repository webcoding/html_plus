<template>
  <a class="x-header-item" v-if="option" @click="onHandle"><i v-show="option.icon" :class="className"></i><span v-show="option.value">{{option.value}}</span><slot></slot></a>
</template>

<script>
export default {
  name: 'x-header-item',
  props: {
    option: {
      type: [Boolean, Object],
      default () {
        return {
          icon: 'home',
          value: '操作',
          callback: null,
        };
      },
    }
  },
  computed: {
    className () {
      if(!this.option){
        return [''];
      }
      return [
        this.option.icon ? 'iconfont' : '',
        this.option.icon ? `icon-${this.option.icon}` : '',
      ];
    }
  },
  methods: {
    onHandle (e) {
      this.$emit('on-x-header-item');
      this.option.callback && this.option.callback(e);
    }
  }
}
</script>
