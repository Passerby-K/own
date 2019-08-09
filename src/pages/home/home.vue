<template>
  <div class="home">
        <home-head></home-head>
        <home-swiper></home-swiper>
        <head-adve></head-adve>
  </div>
</template>

<script>
import HomeHead from "./components/home-head";
import HomeSwiper from "./components/swiper";
import HeadAdve from "./components/adve";
export default {
  name: 'Home',
  components:{
    HomeHead,
    HomeSwiper,
    HeadAdve
  }
  
}
</script>

<style >

</style>

