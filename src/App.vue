<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header></Header>
  <div class="indexPage">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<style scoped>
.indexPage{
  padding-top: 70px;
} 
</style>

