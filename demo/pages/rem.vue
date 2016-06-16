<template>
  <div class="page">
    <div class="content-block-title">使用 rem</div>
    <div class="content-block">
      <!-- <h1>大标题</h1> -->
      <!-- <h2 class="title">关于 rem</h2> -->
      <section>
        <h3>1.1 关于 rem</h3>
        <p>本项目采用 1rem=16px，项目内全部使用 px2rem 形式按 px 书写，如 px2rem(16) 输出即为1rem</p>
        <p>rem 是相对于 html 元素的 font-size 的一个单位。如果 html 上定义了 font-size: 20px;，则无论在任何地方都是 1rem = 20px 这个大小不会受到父元素的影响。</p>
        <p>我们统一使用rem对页面进行整体缩放。强烈建议大家对需要适应页面大小的任何元素都使用 rem 为单位来定义。</p>
        <p>事实上，除了 border-width 之外，appStyles 中已经没有用到px单位的地方。</p>
        <p>我们在 iphone6 上使用 1rem = 20px 来换算。小于 375px 的设备上不做缩小处理，对 大于 375px 宽度的设备进行等比缩放。</p>
        <p>关于 rem 可以参考 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/length">MDN 上的定义</a>。</p>
      </section>
      <section>
        <h3>1.2 为什么使用 rem</h3>
        <p>使用 rem 可以实现页面布局的尺寸对应于唯一标准，可实现缩放时，布局字体等，全等比缩放而不会导致布局错乱</p>
        <p>目前实现，建议以 iphone6 为基准参考。而 rem 的基准，建议使用1rem = 20px 或者 16px，但要求所有使用位置，引用函数 px2rem 转px 值为 rem 使用</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rem'
}
</script>

<style lang="less">
// @import "../../src/style/base/fn";

// .weui_article {
//     padding: 20px 15px;
//     font-size: 15px;
//     section {
//         margin-bottom: 1.5em;
//     }
//     h1 {
//         font-size: 17px;
//         font-weight:400;
//         margin-bottom: .75em;
//     }
//     h2 {
//         font-size: 16px;
//         font-weight:400;
//         margin-bottom: .3em;
//     }
//     h3 {
//         font-weight:400;
//         font-size: 15px;
//     }
// }
</style>
