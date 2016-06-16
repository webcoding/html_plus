<template>
  <div class="page">
    <div class="page-content">
      <div class="content-block-title">badge</div>
      <div class="content-block">
        <badge type="todo">1</badge>
        <badge type="doing">2</badge>
        <badge type="done">3</badge>
        <badge type="todo" text="1"></badge>
        <badge type="doing" text="2"></badge>
        <badge type="done" text="3"></badge>
        <br>
        <badge type="todo">123</badge>
        <badge type="done">new</badge>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {
    console.log(111)
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
