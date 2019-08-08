<template>
  <div class="adve">
      <el-row :span="20" type="flex"  justify="center " >
          <el-col :xs="24"  :sm="24"  :md="24" :lg="24" :xl="24">
            <el-col :xs="12"  :sm="5"  :md="5" :lg="5" :xl="5" >
                <img src="@/assets/img/ad-1.jpg" alt="">
            </el-col>
            <el-col :xs="12"  :sm="5"  :md="5" :lg="5" :xl="5">
                <img src="@/assets/img/ad-2.jpg" alt="">
            </el-col>
            <el-col :xs="12"  :sm="5"  :md="5" :lg="5" :xl="5">
                <img src="@/assets/img/ad-3.jpg" alt="">
            </el-col>
            <el-col :xs="12"  :sm="5"  :md="5" :lg="5" :xl="5">
                <img src="@/assets/img/ad-4.jpg" alt="">
            </el-col>
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
    .adve
        width 100%
        img 
            width 100%
            border-radius 10px
</style>