<template>

<div id="content">
	<div class="first">
		<div class="first-p">
			<img src="2ffa23a2d9a9c51b76c45521485f4593.jpg">
		</div>
	</div>

	<div class="second">
		<ul class="daohang">
			<li class="daohang-item"><a href=""><img src="c298e466911b5691a4c04b7f4b866900.jpg"></a></li>
			<li class="daohang-item"><a href=""><img src="619290e2f2e4cf14f4d1f58edd21691f.jpg"></a></li>
			<li class="daohang-item"><a href=""><img src="e21c878b6a1ac402ecb9f4607525b500.jpg"></a></li>
			<li class="daohang-item"><a href=""><img src="32e0f2085ab94b2458a5792b3053a2dc.jpg"></a></li>
		</ul>
	</div>

	<div class="third">
		<a href=""><img src="70d8e59532caeaaf83052a1829a5b8c8.jpg"></a>
	</div>
		
	<div class="fourth">
		<ul class="on">
			<li><a href=""><img src="bd3718d81da0f64fbf9a57151641e413.jpg"></a></li>
			<li><a href=""><img src="747604f8e32f24436d28e4211cf3ec0f.jpg"></a></li>
			<li><a href=""><img src="8cbd9d2c5d1d52ac8bdb3c858d00fb52.jpg"></a></li>
			<li><a href=""><img src="186e5c27ff15e97443065968dbcd8179.jpg"></a></li>
		</ul>
		<ul class="next">
			<li><a href=""><img src="6e84bccfdd718721f0d134d1899b650f.jpg"></a></li>
			<li><a href=""><img src="07e7daec9125dc8139434da6527ad380.jpg"></a></li>
			<li><a href=""><img src="b5524a43b0cbcc3736b2eaa3f864bfa3.jpg"></a></li>
			<li><a href=""><img src="7a0168dfd68e196120e38b584aec9655.jpg"></a></li>
		</ul>
	</div>
	<div class="fifth">
		<a href=""><img src="82fcfe755ff278e88aba996091514f70.jpg"></a>
	</div>
	<div class="sixth">
		<a href=""><img src="6c92bcc0e076a405b7ec985f3034de8c.jpg"></a>
	</div>

	<div seventh>
		<div class="surprise">
			<div class="surprise-c">
				<div class="fq"><img src="suprice.png"></div>
				<div class="leave">距本场结束</div>
				<div class="time">
					<span class="time1-1">00</span>
              		<span class="time-zi">:</span>
              		<span class="time1-1">00</span>
              		<span class="time-zi">:</span>
              		<span class="time1-1">00</span>
				</div>
				<div class="more"><a href="javascript:;"><img src="/3b8b4e66523f7e91abe01a2751bbb1d0.png"></a></div>
			</div>
		</div>
	</div>

</div>
</template>

<script>

</script>

<style lang="stylus" rel="stylesheet/stylus">
#content
    position relative
    padding-top -86px
    overflow hidden
    height 100%
    .first
      margin-top 86px
      margin-bottom 45px
      /*background: purple*/
      .first-p
        font-size 0
        img
          width 100%
      .second
        width: 100%
        overflow hidden
        .daohang
          white-space nowrap
          float left
          font-size 0
          .daohang-item
            display inline-block
            a
              display block
              img
                width px2rem(750);
      .third
        font-size 0
        a
          display: block
          width 100%
          img
            width: 100%
      .fourth
        width 100%
        .on
          width 100%
          font-size 0
          display -webkit-box
          .next
            width 25%
            a
              display block
              width 100%
              img
                width 100%
      .fifth
        width 100%
        font-size 0
      .sixthde
          display block
          width 100%
          img
            width 100%
      .seventh
        width 100%
        .surprise
          width 100%
          .surprise-c
            position relative
            width 100%
            height 60px
            padding 10px
            .fq
              img
                height 24px
                margin-left -20px
            .leave
              font-size 13px
              margin-top 4px
              margin-left 10px
            .time
              margin-left 5px
              font-size: 12px
              text-align: center
              margin-top 4px
              .time1-1
                border 1px solid #ddd
                padding 1px 2px
                font-size 13px
              .time-zi
                font-weight 700
            .more
              position absolute
              top 2px
              right -75.5px
              a
                display block
                img
                  width 50%
            // .fl
            //   float: left
          .surprise-pro
            padding-left 5px
            margin-bottom 10px
            overflow hidden
            .swiper-container
              width 100%
              white-space nowrap
              float left
              font-size 0
</style>
