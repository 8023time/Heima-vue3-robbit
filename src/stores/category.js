import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getcategoryheader } from '@/api/layout'

export const useCategoryStore = defineStore('category', () => {
    // 在这里的就是这个用户来回去导航列表数据的一个pinai的仓库,很好用来存储数据
    const categorylist = ref([])
    const getcategory = async () => {
      const res = await getcategoryheader()
      categorylist.value = res.result
    }
    return {
        categorylist,
        getcategory
    }
})
