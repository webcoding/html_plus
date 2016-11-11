<template>
  <div class="page-content" transition="app">
    <div class="content-block-title">Welcome To H5_plus@Vue&Framework7</div>
    <div class="content-block"><a href="#!/about" class="btn btn-primary block radius">About H5_plus</a></div>
    <group title="H5_plus Components">
      <div class="list-block">
        <template v-for="item in items">
        <cell :title="item.title" :small="item.small" :link="item.link">
          <i v-if="item.icon" class="iconfont icon-{{item.icon}}" slot="icon"></i>
          <badge :type="item.status" :text="item.status" slot="after"></badge>
        </cell>
        </template>
      </div>
    </group>
  </div>
</template>

<script>

export default {
  name: 'dev-list',
  components: {
    // List
  },
  data () {
    return {
      items: [
        {
          "icon": "",
          "link": "typography",
          "title": "排版样式",
          "small": "typography",
          "type": "base",
          "status": "doing",
        },
        {
          "icon": "",
          "link": "grid",
          "title": "栅格",
          "small": "grid",
          "type": "base",
          "status": "todo",
        },
      ],
    }
  },

  route: {
    data ({ to }) {
    }
  },

  created () {
    // store.on('topstories-updated', this.update)
  },

  destroyed () {
    // store.removeListener('topstories-updated', this.update)
  },

  methods: {
    update () {
      // store.fetchItemsByPage(this.page).then(items => {
      //   this.items = items
      // })
    }
  },

  filters: {
  }
}
</script>

<style>

</style>
