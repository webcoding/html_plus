<style lang="sass">

// @import "../_styles/components/navbar";

</style>

<template>
  <header class="navbar navbar-primary hide">
    <div class="navbar-nav navbar-left">
      <slot name="left"></slot>
    </div>
    <div class="navbar-nav navbar-center">
      <slot name="center"></slot>
    </div>
    <div class="navbar-nav navbar-right">
      <slot name="right"></slot>
    </div>
    <div class="subnavbar" v-if="_slotContents.subnavbar">
      <slot name="subnavbar"></slot>
    </div>
  </header>
</template>


<script type="text/babel">
  export default {
    props: {
      type: {
        type: String,
        default: 'static' // 'static' 'fixed' 'through'
      }
    },
    ready() {
      const { type } = this;
      const pageClassArray = [];
      const { $root } = this;
      if ( type === 'fixed' ) {
        pageClassArray.push( 'navbar-fixed' );
      } else if ( type === 'through' ) {
        //$broadcast 参看 https://segmentfault.com/q/1010000003816641
        $root.$broadcast( 'plus-pages-add-class', 'navbar-through' );
      }
      if ( this._slotContents.subnavbar ) {
        pageClassArray.push( 'with-subnavbar' );
      }
      $root.$broadcast( 'plus-page-add-class', pageClassArray );
    }
  };
</script>
