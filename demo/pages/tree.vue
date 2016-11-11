<template>
  <div class="page" transition="app">
    <div class="page-content">
      <ul id="demo">
        <tree-item
          class="item"
          :model="treeData">
        </tree-item>
      </ul>
    </div>
  </div>
</template>

<script>

// demo data
var data = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}

export default {
  data: function() {
    return {
      treeData: data,
    }
  },
  ready: function(){
    console.log(this.treeData);
  },
}
</script>
