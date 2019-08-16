<template>
  <div class="zk_content">
      <el-row :span="20" type="flex" justify="center" class="row" >
        <el-col class="el-col" :xs="6"  :sm="5"  :md="5" :lg="2" :xl="2">
            <div class="nav" ref="nav"  @click="nav(0)">
               <span :class=" index==0 ? 'active' :'' ">首页推荐</span>                 
            </div>
        </el-col>
        <el-col class="el-col" :xs="6"  :sm="5"  :md="5" :lg="2" :xl="2" :offset="1">
            <div class="nav" ref="nav"  @click="nav(1)">
             <span :class=" index==1 ? 'active' :'' ">最新发布</span>   
            </div>
        </el-col>
        <el-col class="el-col" :xs="6"  :sm="5"  :md="5" :lg="2" :xl="2" :offset="1">
            <div class="nav" ref="nav"  @click="nav(2)" >
               <span :class=" index==2 ? 'active' :'' ">上升最快</span> 
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
            index:"0"
            // title:["首页推荐",'最新发布','上升最快']
            // active:{
            //     color:red
            // }
        }
    },
    components:{
        HomePage,
        News,
        Up,

    },
    methods:{
        nav(i){
        //   console.log(i)
          if(i==0){
              this.flag="HomePage";
              this.index="0"
          }else if(i == 1){
              this.flag="News";
              this.index="1"
          }else{
              this.flag="Up";
              this.index="2"
          }
        }
        // nav(i) {
        //     console.log(i);
        //     if (i == 0) {
        //      this.flag = "HomePage";
        //      this.index="0"
        //     this.active
        //     } else if (i == 1) {
        //     this.flag = "News";
        //     this.index="1"

        //     } else {
        //     this.flag = "Up";
        //     this.index="2"

        //     }
        //     }
        
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

    .active
        color black
        padding-bottom  10px
        border-bottom 2px solid black




</style>