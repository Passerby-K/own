<template>
  <div class="zk_content">
      <el-row :span="20" type="flex" justify="center" class="row" >
        <el-col class="el-col" :xs="6"  :sm="5"  :md="5" :lg="2" :xl="2">
            <div class="nav" ref="nav" @click.prevent="flag='HomePage'" >
               <span>首页推荐</span>                 
            </div>
        </el-col>
        <el-col class="el-col" :xs="6"  :sm="5"  :md="5" :lg="2" :xl="2" :offset="1">
            <div class="nav" ref="nav" @click.prevent="flag='News'" >
             <span>最新发布</span>   
            </div>
        </el-col>
        <el-col class="el-col" :xs="6"  :sm="5"  :md="5" :lg="2" :xl="2" :offset="1">
            <div class="nav" ref="nav" @click.prevent="flag='Up'"  >
               <span>上升最快</span> 
            </div>
        </el-col>
      </el-row>
      <el-row :sapn="20">
          <el-col>
              <div class="zujian">
                  <component :is="flag"></component>
              </div>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import HomePage from "./compoents/home-page"
import News from "./compoents/news"
import Up from "./compoents/up"
export default {
    name:"Zkcon",
    data(){
        return{
            flag:"HomePage",
            // title:["首页推荐",'最新发布','上升最快']
        }
    },
    components:{
        HomePage,
        News,
        Up

    },
    methods:{
        // nav(i){
        //   i.this.flag="Up"
        // }
        
    }
    
}

</script>

<style scoped lang="stylus">
.zk_content
    width 100%
    min-height 300px
    box-sizing border-box
    .nav
        line-height 50px
        text-align center
        font-size 20px
        color #999
        span:hover
            padding-bottom  10px
            color black
            border-bottom 2px solid black
    .conter
        border 1px solid red 


</style>