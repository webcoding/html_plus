<template>
  <div class="page" transition="app">
    <div class="page-content">
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
      <!-- <List class="plus_list_block" :items="items"></List> -->
    </div>
  </div>
</template>

<script>

// import icon_nav_button from '../images/icon_nav_button.png';

// import Grid from './../../src/Grid.vue'
// import List from './../../src/List.vue'
// import List from './../../src/tags/list-block.vue'
import list from '../list'

export default {

  name: 'index',

  components: {
    // List
  },

  data () {
    return {
      items: list
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
