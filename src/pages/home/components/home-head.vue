<template>
<div class="home-head">
  <el-row type="flex" justify="space-around">
      <el-col :span="4"><div class="logo">我行我素</div></el-col>
      <el-col :span="12 " >
          <el-row>
              <el-col :md="3" :lg="3">
                  <div class="nav">首页</div>
              </el-col>
              <el-col :md="3" :lg="3">
                  <div class="nav">发现</div>
              </el-col>
              <el-col :md="3" :lg="3">
                  <div class="nav">同城</div>
              </el-col>
              <el-col :md="3" :lg="3">
                  <div class="nav">职位</div>
              </el-col>
              <el-col :md="3" :lg="3">
                  <div class="nav">活动</div>
              </el-col>
              <el-col :md="3" :lg="3">
                  <div class="nav">正版素材</div>
              </el-col>
              <el-col :md="3" :lg="3">
                  <div class="nav">课程</div>
              </el-col>
              <el-col :md="3" :lg="3">
                  <div class="nav el-icon-more"></div>
              </el-col>
          </el-row>
      </el-col>
      <el-col :span="5">
          <el-row>
              <el-col :md="6" :lg="6">
                  <div class="seek el-icon-search"></div>
              </el-col>
              <el-col :md="6" :lg="6">
                  <div class="seek el-icon-upload2"></div>
              </el-col>
              <el-col :md="6" :lg="6">
                  <div class="seek">注册</div>
              </el-col>
              <el-col :md="6" :lg="6">
                  <div class="seek">登陆</div>
              </el-col>
              
              
          </el-row>
      </el-col>
  </el-row>
</div>
  
</template>

<script>
export default {
    name:"HomeHead"
}

</script>

<style lang="stylus" scoped>
    .home-head
        background-color #ffe300
        width 100%
        height 56px
        .logo
            font-size 28px
            line-height 56px
            font-weight bold
            text-align center
   
        .nav
            // border 1px  solid  red
            line-height 56px;
            text-align center
            font-size 16px
            .nav img 
                width 20px
                height 20px
        .seek
            // border 1px  solid  red
            line-height 56px
            text-align center
            font-size 16px




</style>