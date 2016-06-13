<template>
  <div class="page">
    <div class="page-content">
      <div class="content-block-title">待继续完善</div>
      <div class="content-block">
        <p>button 很简单，页面上使用的类型也不会很多，只实现基础版，具体情况使用时扩展即可，比如btn-primary 以及 active disabled 的状态</p>
        <p>更精简可以设定，某些主要颜色的按钮以及激活态，镂空也算颜色分类，禁用状态统一设定为灰色不可点击</p>
      </div>
      <div class="content-block-title">基本样式</div>
      <div class="content-block">
        <x-button>Default</x-button>
        <x-button active>Active</x-button>
        <x-button disabled>Disabled</x-button>
        <br>
        <x-button type="primary">Primary</x-button>
        <x-button type="sub">Sub</x-button>
        <x-button type="success">Success</x-button>
        <x-button type="warning">Warning</x-button>
        <x-button type="danger">Danger</x-button>
        <x-button type="dark">Dark</x-button>
        <br>
        <x-button block>Default Block</x-button>
        <x-button block type="primary">Primary Block</x-button>
        <br>
        <x-button size="xs">Default xs</x-button>
        <x-button size="sm">Default sm</x-button>
        <x-button>Default</x-button>
        <x-button size="lg">Default lg</x-button>
        <x-button size="xl">Default xl</x-button>
        <br>
        <x-button hollow type="primary">镂空</x-button>
        <x-button hollow type="success">镂空</x-button>
        <x-button hollow disabled type="primary">镂空</x-button>
        <x-button hollow disabled type="success">镂空</x-button>
      </div>
      <div class="content-block-title">扩展按钮组</div>
      <div class="content-block">
        <group class="btn-group">
          <x-button>Left</x-button>
          <x-button>Center</x-button>
          <x-button>Right</x-button>
        </group>
        <group class="btn-group">
          <x-button type="primary">Left</x-button>
          <x-button type="success">Center</x-button>
          <x-button type="warning">Right</x-button>
        </group>
        <group class="btn-group">
          <x-button type="success" :hollow>Left</x-button>
          <x-button type="success" :hollow>Center</x-button>
          <x-button type="success" :hollow>Right</x-button>
        </group>
        <group class="btn-group">
          <x-button type="xs">Left</x-button>
          <x-button type="xs">Center</x-button>
          <x-button type="xs">Right</x-button>
        </group>
        <group class="btn-group btn-group-justify">
          <x-button type="primary">Left</x-button>
          <x-button type="primary">Center</x-button>
          <x-button type="primary">Right</x-button>
        </group>
        <group class="btn-group btn-group-stacked">
          <x-button type="primary">Left</x-button>
          <x-button type="primary">Center</x-button>
          <x-button type="primary">Right</x-button>
        </group>
      </div>
    </div>
  </div>
</template>


<style>
.content-block .btn{ margin-bottom: 10px;}
.btn-group .btn{margin: 0;}
</style>
