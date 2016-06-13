<template>
  <div class="page" transition="app">
    <div class="page-content">
      <group title="静态列表">
        <div class="list-block">
          <template v-for="item in items">
          <cell :title="item.title" :small="item.small" :link="item.link">
            <i v-if="item.icon" class="iconfont icon-{{item.icon}}" slot="icon"></i>
          </cell>
          </template>
        </div>
      </group>
      <!-- <List class="plus_list_block" :items="items"></List> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      items: [
        {
          title: 'List Item 1',
        },
        {
          title: 'List Item 2',
        },
        {
          title: 'List Item 3',
        },
        {
          title: 'List Item 4',
        },
      ]
    }
  },
}
</script>
