import { ref } from 'vue'
import { onMounted } from 'vue'
import { onUpdated } from 'vue'
import { useRoute } from 'vue-router';
import { getcategorylistdata } from '@/api/category';

export const usecategorydata = () => {
    const categorylist = ref([])
    const route =useRoute()
    const getcategorydata = async (id = route.params.id) => {
    const res = await getcategorylistdata(id)
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
    return {
        categorylist,
        getcategorydata,
    }
}