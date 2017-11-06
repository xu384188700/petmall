<template>
  <div>
     
    <!-- <div class="tab border-1px"> -->
      <ele-header></ele-header>
      <ele-footer></ele-footer>
      <ele-conter></ele-conter>
    <!--用来标识显示当前路由组件的标签-->
    <!--属性会传递给所有管理的路由组件-->
    
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import footer from './components/footer/footer.vue'
  import conter from './components/conter/conter.vue'
  export default {
    components: {
      'ele-header': header,
      'ele-footer': footer,
      'ele-conter': conter
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
