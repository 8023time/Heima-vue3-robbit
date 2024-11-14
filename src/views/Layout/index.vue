<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFixed from './components/LayoutFixed.vue';
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue'

// 在这里的话就是这个可以实现的就是这个获取后台数据的一个统一出发的地方
const categorystore = useCategoryStore()
onMounted( () => {
    categorystore.getcategory()
})
</script>

<template>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <LayoutFixed></LayoutFixed>
    <router-view></router-view>
    <LayoutFooter></LayoutFooter>
    
</template>