<template>
  <span class="badge" :class="className">{{text}}<slot></slot></span>
</template>

<script>
export default {
  props: {
    type: {
      default: ''
    },
    radius: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: true
    },
    text: String
  },
  ready: function () {
    console.log(this.text)
  },
  computed: {
    className () {
      return [
        {
          'badge-single': this.text && this.text.length === 1,
          radius: this.radius,
          round: this.round,
        },
        this.type ? `badge-${this.type}` : '',
      ]
    }
  }
}
</script>
