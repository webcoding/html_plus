<template>
  <div class="page">
    <div class="page-content">
      <div class="content-padded">
        <h1>按钮</h1>
        <p>button 很简单，不要搞得实现很复杂，基础样式+主题色+大小</p>
        <p>挂载状态类: block radius round disabled active</p>

        <h3>基础样式</h3>
        <div class="example">
          <x-button>Default</x-button>
          <br>
          <x-button type="primary">Primary</x-button>
          <x-button type="sub">Sub</x-button>
          <x-button type="success">Success</x-button>
          <x-button type="warning">Warning</x-button>
          <x-button type="danger">Danger</x-button>
          <x-button type="dark">Dark</x-button>
          <br>
          <x-button hollow type="primary">镂空</x-button>
          <x-button hollow type="success">镂空</x-button>
          <br>
          <x-button size="xs">Default xs</x-button>
          <x-button size="sm">Default sm</x-button>
          <x-button>Default</x-button>
          <x-button size="lg">Default lg</x-button>
          <x-button size="xl">Default xl</x-button>
        </div>
        <h3>状态类</h3>
        <div class="example">
          <x-button block>Default Block</x-button>
          <x-button block  type="primary">Primary Block</x-button>
          <x-button type="primary" size="xs" radius>圆角小按钮</x-button>
          <x-button radius>圆角</x-button>
          <x-button round>大圆角</x-button>
          <br>
          <x-button disabled>禁用默认</x-button>
          <x-button type="primary" disabled>禁用primary</x-button>
          <x-button type="danger" disabled>禁用danger</x-button>
          <x-button type="primary" hollow disabled>禁用镂空</x-button>
        </div>
        <h3>按钮组扩展</h3>
        <div class="example">
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
  </div>
</template>


<style>
.content-padded .btn{ margin-bottom: 10px;}
.btn-group .btn{margin: 0;}
</style>
