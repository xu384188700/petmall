<template>

<div id="footer">
	<ul class="nav-list">
		<li class="nav-item">
			<a href="" class="index-a"></a>
		</li>
		<li class="nav-item">
			<a href="" class="type-a"></a>
		</li>
		<li class="nav-item">
			<a href="" class="cart-a"></a>
		</li>
		<li class="nav-item">
			<a href="" class="myepet-a"></a>
		</li>
	</ul>
</div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"
  #footer
    position absolute
    left 0
    bottom 0
    z-index 100
    width: 100%
    .nav-list
      overflow hidden
      width 100%
      .nav-item
        position relative
        float left
        width: 25%
        height 45px
        .index-a
          vertical()
          ft-bg-image("./img.png",0,0)
        .type-a
          vertical()
          ft-bg-image("./img.png",-85px,-40px)
        .cart-a
          vertical()
          ft-bg-image("./img.png",-85px,-80px)
        .myepet-a
          vertical()
          ft-bg-image("./img.png",-85px,-120px)
          
</style>
