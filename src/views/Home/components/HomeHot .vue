<script setup>
import HomePanel from './HomePanel.vue';
import { gethotgoodslist } from '@/api/home.js'
import { ref } from 'vue'
import { onMounted } from 'vue'

const hotgoods = ref([])
const hotgoodsdata = async () => {
    const res = await gethotgoodslist()
     hotgoods.value = res.result
}
onMounted(() => {
    hotgoodsdata()
})
</script>

<template>
    <HomePanel title="hot消息" message="骄傲的">
        <ul class="goods-list">
        <li v-for="item in hotgoods" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
    </HomePanel>
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>