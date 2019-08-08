<template>
      <!-- The ref attr used to find the swiper instance -->
    <el-row class="head-swiper" type="flex" justify="center">
        <el-col :xs="24"   :sm="22"  :md="22" :lg="22" :xl="22">
            <swiper :options="swiperOption" ref="mySwiper" >
                <swiper-slide><img src="@/assets/img/ban-1.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="@/assets/img/ban-2.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="@/assets/img/ban-3.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="@/assets/img/ban-4.jpg" alt=""></swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
                <!-- <div class="swiper-button-next" slot="button-next"></div> -->
                <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
            </swiper>
        </el-col>
    </el-row>
    
</template>

<script>
export default {
    name:"HeadSwiper",
    data(){
        return{
            swiperOption:{
                pagination:".swiper-pagination",
                autoplay:300,
                speed:300,
                effect : 'fade',
                loop:true
            }
        }
    }
}

</script>

<style scoped lang="stylus">
@import "../../../assets/style/media.css";

    .head-swiper
        width 100%;
        padding 20px 0
        border-radius 10px
        img 
            width 100%
            border-radius 10px

</style>    