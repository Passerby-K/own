<template>
  <div class="home">
        <home-head></home-head>
        <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHead from "./components/home-head";
import HomeSwiper from "./components/swiper";
export default {
  name: 'Home',
  components:{
    HomeHead,
    HomeSwiper
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  >

   
</style>

