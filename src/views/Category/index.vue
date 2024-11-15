<script setup>
import { getcategorylistdata } from '@/api/category';
import { ref } from 'vue'
import { getbannerpicture } from '@/api/home';
import { onMounted } from 'vue'
import { onUpdated } from 'vue'
import { useRoute } from 'vue-router';

const categorylist = ref([])
const route =useRoute()
const getcategorydata = async () => {
  const res = await getcategorylistdata(route.params.id)
  categorylist.value = res.result
}
onMounted(
  () => {
    getcategorydata()
  }
)
onUpdated(
  () => {
    getcategorydata()
  }
)

const bannercategorydata = ref()
const getbannerdata = async () => {
  const res = await getbannerpicture()
  bannercategorydata.value = res.result
}
onMounted(
  () => {
    getbannerdata()
  }
)
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{categorylist.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
  <!-- 轮播图的位置在这个地方 -->
  <div class="home-banner">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in bannercategorydata" :key="item.id">
          <img :src="item.imgUrl" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px; 
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}

.home-banner {
      width: 1240px;
      height: 500px;
      margin: 0 auto;
      z-index: 98;

      img {
        width: 100%;
        height: 500px;
      }
    }
</style>