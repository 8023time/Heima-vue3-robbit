<script setup>
import { getbannerpicture } from '@/api/home.js'
import { ref } from 'vue'
import { onMounted } from 'vue'

const bannerpicture = ref()
const getbannerlistdata = async () => {
  const res = await getbannerpicture()
  bannerpicture.value = res.result
}
onMounted(() => {
  getbannerlistdata()
})

</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerpicture" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>