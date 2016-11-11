
<!-- usage

  <x-button mini plain type="primary">primary</x-button>
  <x-button disabled>disable submit</x-button>
  <x-button :text="text001" :disabled="disable001" @click="handle" type="primary"></x-button>

  methods: {
    change (value) {
      console.log('change:', value)
    },
    handle () {
      this.text001 = 'processing'
      this.disable001 = true
    }
  },
  data () {
    return {
      text001: 'click me',
      disable001: false
    }
  }

-->

<template>
  <button class="btn" :class="className" :disabled="disabled">{{text}}<slot></slot></button>
</template>

<script>
export default {
  props: {
    type: {
      default: 'default'
    },
    size: {
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    hollow: {
      type: Boolean,
      default: false
    },
    text: String
  },
  computed: {
    className () {
      return [
        {
          disabled: this.disabled,
          active: this.active,
          radius: this.radius,
          round: this.round,
          block: this.block,
        },
        this.type ? (this.hollow ? `btn-hollow-${this.type}` : `btn-${this.type}`) : '',
        this.size ? `btn-${this.size}` : '',
      ]
    }
  }
}
</script>
