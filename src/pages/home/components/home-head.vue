<template>
<div class="home-head">
  <el-row type="flex" justify="space-around">
      <el-col :xs="6" :sm="4" :md="4" :lg="4" :xl="4"><div class="logo">我行我素</div></el-col>
      <el-col :span="12 " >
          <el-row>
              <el-col  :sm="3"  :md="3" :lg="3" :xl="3" class="hidden-xs-only">
                  <div class="nav hov" >首页</div>
              </el-col>
              <el-col  :sm="3"  :md="3" :lg="3" :xl="3" class="hidden-xs-only">
                  <div class="nav hov" >发现</div>
              </el-col>
              <el-col :sm="3"  :md="3" :lg="3" :xl="3" class="hidden-xs-only">
                  <div class="nav hov">同城</div>
              </el-col>
              <el-col :sm="3"  :md="3" :lg="3" :xl="3" class="hidden-xs-only">
                  <div class="nav hov">职位</div>
              </el-col>
              <el-col :sm="3"  :md="3" :lg="3" :xl="3" class="hidden-xs-only">
                  <div class="nav hov" >活动</div>
              </el-col>
              <el-col :sm="3"  :md="3" :lg="3" :xl="3" class="hidden-xs-only">
                  <div class="nav hov"><span class="hidden-sm-only">正版</span><span>素材</span> </div>
              </el-col>
              <el-col :sm="3"  :md="3" :lg="3" :xl="3" class="hidden-xs-only">
                  <div class="nav hov ">课程</div>
              </el-col>
              <el-col :xs="20" :offset="10"  :sm="3"  :md="3" :lg="3" :xl="3" class="hidden-sm-and-up">
                  <div class="nav hov "  @click="sow"><span class="el-icon-more icon"></span></div>
                  
              </el-col>
                    
          </el-row>
            
      </el-col>
            <div v-show="show" class="mod" >
                <p>发现</p>
                <p>同城</p>
                <p>职位</p>
                <p>活动</p>
                <p>课程</p>
                <p>正版素材</p>
            </div>
      <el-col :span="5">
          <el-row>
              <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                  <div class="seek hov  "><span class="el-icon-search"></span></div>
              </el-col>
              <el-col :xs="6"  :sm="6" :md="6" :lg="6" :xl="6">
                  <div class="seek hov "><span class="el-icon-upload2"></span></div>
              </el-col>
              <el-col :xs="12" :sm="6" :md="6" :lg="6">
                  <div class="seek ">登陆</div>
              </el-col>
              <el-col :sm="6" :md="6" :lg="6" class="hidden-xs-only">
                  <div class="seek ">注册</div>
              </el-col>
              
              
          </el-row>
      </el-col>
  </el-row>
</div>
  
</template>

<script>
export default {
    name:"HomeHead",
    data(){
        return{
           show:true
            
        }
    },
    methods:{
       sow(){
           this.show=!this.show
       }

    }
}

</script>

<style lang="stylus" scoped>
@import "../../../assets/style/media.css";
    .home-head
        background-color #ffe300
        width 100%
        height 56px
        // overflow hidden
        .logo
            font-size 28px
            line-height 56px
            font-weight bold
            text-align center
            // border 1px  solid red
   
        .nav
            // border 1px  solid  red
            line-height 56px;
            text-align center
            font-size 16px
            .nav img 
                width 20px
                height 20px
            .icon
                font-size 20px
        .mod
            position absolute
            top 56px
            left 0
            width 100% 
            // background-color rgba(255,227,0,0.5)
            background-color rgba(0,0,0,.6)
            color white
            box-shadow 0 3px 3px #eee
            p
                line-height 40px
                text-align center
                font-size 20px
                font-family "微软雅黑"
            
        .seek   
            // border 1px  solid  red
            line-height 56px
            text-align center
            font-size 16px
        
        .hov:hover
            background-color black 
            color #ffe300
        
        




</style>