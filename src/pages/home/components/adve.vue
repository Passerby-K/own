<template>
  <div class="adve">
      <el-row :span="24"  type="flex"  justify="center " class="adve-wrap">
            <el-col class="adve-col" :xs="10"  :sm="10"  :md="5" :lg="5" :xl="5" >
                <img src="@/assets/img/ad-1.jpg" alt="">
            </el-col>
            <el-col class="adve-col" :xs="10"  :sm="10"  :md="5" :lg="5" :xl="5">
                <img src="@/assets/img/ad-2.jpg" alt="">
            </el-col>
            <el-col class="adve-col" :xs="10"  :sm="10"  :md="5" :lg="5" :xl="5">
                <img src="@/assets/img/ad-3.jpg" alt="">
            </el-col>
            <el-col class="adve-col" :xs="10"  :sm="10"  :md="5" :lg="5" :xl="5">
                <img src="@/assets/img/ad-4.jpg" alt="">
            </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    name:"HeadAdve"
}

</script>

<style scoped lang="stylus">
@import "../../../assets/style/media.css";

    .adve
        width 100%
        .adve-wrap .adve-col
            margin 20px
        img 
            width 100%
            border-radius 10px
            
        .adve-wrap
            flex-wrap wrap
            
</style>