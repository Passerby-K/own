<template>
  <div class="home">
        <home-head></home-head>
        <home-swiper></home-swiper>
        <head-adve></head-adve>
        <zkcon></zkcon>
        <foot></foot> 
  </div>
</template>

<script>
import HomeHead from "./components/home-head";
import HomeSwiper from "./components/swiper";
import HeadAdve from "./components/adve";
import Zkcon from "../content/zk-con";
import Foot from "../footer/footer";

export default {
  name: 'Home',
  components:{
    HomeHead,
    HomeSwiper,
    HeadAdve,
    Zkcon,
    Foot
  }
  
}
</script>

<style >

</style>

