<template>
 <div id="header">
        <div class="up">
          <div class="place">
            <div class="left">
              <a href="">
                <span>狗狗站</span> 
                <span>|</span> 
                <span class="f2">广东</span>
                <i></i>
              </a>
            </div> 
            <form class="search">
              <a href="">
                <input type="search" placeholder="搜索商品和品牌 "disabled="disabled"> 
                <span class="serach-ico"></span>
              </a>
            </form>
            <a href="" class="h-msg">
            <img src="./mydope.png">
            </a>
          </div>
        </div>
        <div class="down">
          <ul class="nav-list">
            <li class="dscroll-li on">
              <a href="javascript:;">
                <span class="rela">
                  <span>首页</span>
                  <i></i>
                </span>
              </a>
            </li>
            <li class="dscroll-li">
              <a href="javascript:;">
                <span class="rela">
                  <span>服饰城</span>
                  <i></i>
                </span>
              </a>
            </li>
            <li class="dscroll-li">
              <a href="javascript:;">
                <span class="rela">
                  <span>狗狗主粮</span>
                  <i></i>
                </span>
              </a>
            </li>
            <li class="dscroll-li">
              <a href="javascript:;">
                <span class="rela">
                  <span>医疗服务</span>
                  <i></i>
                </span>
              </a>
            </li>
            <li class="dscroll-li">
              <a href="javascript:;">
                <span class="rela">
                  <span>零食玩具</span>
                  <i></i>
                </span>
              </a>
            </li>
            <li class="dscroll-li">
              <a href="javascript:;">
                <span class="rela">
                  <span>日用外出</span>
                  <i></i>
                </span>
              </a>
            </li>
            <li class="dscroll-li">
              <a href="javascript:;">
                <span class="rela">
                  <span>美容香波</span>
                  <i></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
 </div>
</template>

<script>


</script>

<style lang="stylus" rel="stylesheet/stylus">
 
#header
    position absolute
    left 0
    top 0
    width 100%
    z-index 2
    .up
      height: 51px
      padding: 5px 10px
      .place
        height: 41px
        padding: 8px 0
        background: #fff
        font-size 13px
        text-align: center
        display: -webkit-box
        -webkit-box-align: center
        display: -moz-box
        -moz-box-align: center
        width: 100%
        .left
          margin-right: 20px
          position: relative
          font-size: 14px
          line-height 1.6
          a
            color: #898989
            text-decoration: none
            -webkit-tap-highlight-color: rgba(0,0,0,0)
            .s3
              font-size: 13px
          i
            position: absolute
            top: 10px;
            right: -11px
            border-width: 4px
            font-size: 0
            line-height: 0
            border-style: solid dotted dotted
            border-color: #898989 transparent transparent
        .search
          position: relative
          -webkit-box-flex: 1
          margin 0
          a
            input
              width: 100%
              border: 0
              height: 25px
              background: #e9e9e9
              border-radius: 4px
              color: #bcbcbc
              text-indent: 10px
              font-size: 13px
              outline: 0
            .serach-ico
              width: 11px
              height: 11px
              position: absolute
              right: 5px
              top: 0
              bottom: 0
              margin: auto 0
              background: url("./search.png") no-repeat
              background-size 100% auto
        .h-msg
          display: block
          color: #333
          text-decoration: none
          -webkit-tap-highlight-color: rgba(0,0,0,0)
          img
            width: 25px
            margin-left: 10px
            border: 0
            vertical-align: middle
    .down
      width 100%
      height 35px
      overflow hidden
      white-space nowrap
      .nav-list
        float left
        font-size 0
        list-style none
        
        
        .dscroll-li
          width 74px
          height 36px
          display inline-block
          &.on
            span
              display inline-block
              color #459d36
            i
              background #459d36
          a
            display block
            height 100%
            width 100%
            line-height 36px
            font-size 14px
            text-align center
            color #666
            .rela
              position relative
              i
                position absolute
                left -10%
                bottom 1px
                width 120%
                height 2px
</style>
